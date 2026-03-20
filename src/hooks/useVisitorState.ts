import { useState, useEffect } from 'react';

interface VisitorData {
  state: 'new' | 'returning' | 'lead' | 'customer';
  firstVisit: string;
  visitCount: number;
  referrer: string;
  hasEmail: boolean;
}

interface UseVisitorStateReturn {
  visitorState: VisitorData['state'];
  isReturning: boolean;
  isFromAI: boolean;
  referrerSource: string;
  visitCount: number;
  markAsLead: () => void;
  markAsCustomer: () => void;
}

const STORAGE_KEY = 'esgeo_visitor';

const AI_REFERRERS = ['gemini.google.com', 'claude.ai', 'perplexity.ai', 'chatgpt.com', 'chat.openai.com'];

function detectReferrerSource(referrer: string): string {
  if (!referrer) return 'direct';
  if (AI_REFERRERS.some(ai => referrer.includes(ai))) return 'ai';
  if (referrer.includes('google.com') && !referrer.includes('gemini')) return 'google';
  if (referrer.includes('tiktok.com')) return 'tiktok';
  if (referrer.includes('linkedin.com')) return 'linkedin';
  if (referrer.includes('twitter.com') || referrer.includes('x.com')) return 'twitter';
  return 'other';
}

export function useVisitorState(): UseVisitorStateReturn {
  const [data, setData] = useState<VisitorData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as VisitorData;
        // Increment visit count on new session
        const updated = {
          ...parsed,
          visitCount: parsed.visitCount + 1,
          state: parsed.hasEmail ? 'lead' as const :
                 parsed.visitCount > 0 ? 'returning' as const : 'new' as const,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      }
    } catch {}

    // First visit
    const initial: VisitorData = {
      state: 'new',
      firstVisit: new Date().toISOString(),
      visitCount: 1,
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      hasEmail: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  });

  const referrerSource = detectReferrerSource(data.referrer);

  const markAsLead = () => {
    const updated = { ...data, state: 'lead' as const, hasEmail: true };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const markAsCustomer = () => {
    const updated = { ...data, state: 'customer' as const };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    visitorState: data.state,
    isReturning: data.visitCount > 1,
    isFromAI: referrerSource === 'ai',
    referrerSource,
    visitCount: data.visitCount,
    markAsLead,
    markAsCustomer,
  };
}