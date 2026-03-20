import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import EmailCapture from './EmailCapture';
import { useVisitorState } from '@/hooks/useVisitorState';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const { visitorState } = useVisitorState();

  useEffect(() => {
    // Don't show to leads or customers
    if (visitorState === 'lead' || visitorState === 'customer') return;

    // Don't show if already shown this session
    if (sessionStorage.getItem('esgeo_exit_shown')) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem('esgeo_exit_shown', 'true');
        // Track
        (window as any).clarity?.('event', 'exit_intent_shown');
      }
    };

    // Only on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visitorState]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="font-heading font-bold text-xl mb-2">
          Antes de irte...
        </h3>
        <p className="text-muted-foreground mb-6">
          Llévate el checklist GEO gratis. Paso a paso para que las IAs citen tu marca.
        </p>

        <EmailCapture source="exit_intent" />
      </div>
    </div>
  );
}