import React from 'react';
import { X } from 'lucide-react';
import { SignIn, SignUp } from '@clerk/clerk-react';

interface AuthModalProps {
  open: boolean;
  mode: 'sign-in' | 'sign-up';
  onClose: () => void;
  onSwitchMode: (mode: 'sign-in' | 'sign-up') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ open, mode, onClose, onSwitchMode }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-[101] w-full max-w-md mx-4">
        <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            aria-label="Close auth modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="p-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={() => onSwitchMode('sign-in')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  mode === 'sign-in'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => onSwitchMode('sign-up')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  mode === 'sign-up'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-white">
              {mode === 'sign-in' ? (
                <SignIn routing="hash" appearance={{ variables: { colorPrimary: '#a855f7' } }} />
              ) : (
                <SignUp routing="hash" appearance={{ variables: { colorPrimary: '#a855f7' } }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
