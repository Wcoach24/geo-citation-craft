import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useVisitorState } from '@/hooks/useVisitorState';
import { supabase } from '@/integrations/supabase/client';
import { trackEvent } from '@/lib/analytics';

interface EmailCaptureProps {
  compact?: boolean;
  source?: string;
}

export default function EmailCapture({ compact = false, source = 'inline' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { markAsLead, visitorState } = useVisitorState();

  // Don't show if already a lead or customer
  if (visitorState === 'lead' || visitorState === 'customer') {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      // Send to backend — captures lead + sends welcome email
      const { error } = await supabase.functions.invoke('capture-lead', {
        body: { email, source },
      });

      if (error) {
        console.error('capture-lead error:', error);
        // Still mark as lead locally even if backend fails
      }

      markAsLead();
      setStatus('success');

      // Track conversions
      trackEvent.leadCapture(source);
      (window as any).clarity?.('event', 'email_capture', { source });
    } catch {
      // Mark as lead locally even on network failure
      markAsLead();
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 ${compact ? 'py-2' : 'py-6'} text-primary`}>
        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
        <span className="font-medium">¡Listo! Revisa tu email para el checklist GEO.</span>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={status === 'loading'} className="btn-cta px-4 py-2 cursor-pointer">
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        </Button>
      </form>
    );
  }

  return (
    <div className="bg-card border rounded-2xl p-6 md:p-8 max-w-lg mx-auto card-clay">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Mail className="h-5 w-5 text-accent" />
        </div>
        <h3 className="font-heading font-bold text-lg">Recibe el checklist GEO gratis</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        Checklist paso a paso para hacer tu web citable por modelos de IA.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={status === 'loading'} className="btn-cta cursor-pointer whitespace-nowrap">
          {status === 'loading' ? (
            <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Enviando...</>
          ) : (
            'Envíame el checklist'
          )}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">
        Solo para enviarte el recurso. Sin spam. Puedes darte de baja en cualquier momento.
      </p>
      {status === 'error' && (
        <p className="text-xs text-destructive mt-2">Hubo un error. Inténtalo de nuevo.</p>
      )}
    </div>
  );
}
