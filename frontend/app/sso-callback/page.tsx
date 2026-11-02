'use client';

import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';

export default function SSOCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7F5]">
      <div className="text-center space-y-3">
        <AuthenticateWithRedirectCallback />
        <p className="text-xs text-[#64748B]">Completing authentication...</p>
      </div>
    </div>
  );
}
