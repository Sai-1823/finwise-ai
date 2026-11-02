'use client';

import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import { ShieldCheck } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  title?: string;
  onSearchClick?: () => void;
}

export function AppLayout({ children, pageTitle, title, onSearchClick }: AppLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { user } = useAuth();
  const displayTitle = pageTitle || title || 'FinWise AI';

  return (
    <div className="app-shell">
      <AppSidebar isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <section className="main-area">
        <AppHeader
          pageTitle={displayTitle}
          onOpenMobileNav={() => setMobileNavOpen(true)}
          onSearchClick={onSearchClick}
        />

        <div className="content">
          {children}

          <footer className="footer mt-12">
            <span>© 2026 FinWise AI</span>
            <span>
              <ShieldCheck size={13} className="text-emerald-700 inline mr-1" />
              Your finances deserve clarity.
            </span>
            {user?.email === 'demo@finwise.ai' && (
              <span className="footer-demo">DEMO · SAMPLE DATA ONLY</span>
            )}
          </footer>
        </div>
      </section>
    </div>
  );
}
