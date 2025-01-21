import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show our custom install prompt
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the browser install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-xl">
        <div className="p-4 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">Install AlumNet App</h3>
            <p className="mt-1 text-sm text-indigo-100">
              Get the best experience by installing our app on your device
            </p>
          </div>
          <button
            onClick={() => setShowPrompt(false)}
            className="ml-4 text-white hover:text-indigo-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-4 pb-4 flex gap-3">
          <button
            onClick={handleInstall}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            <Download className="h-5 w-5" />
            Install Now
          </button>
          <button
            onClick={() => setShowPrompt(false)}
            className="px-4 py-2 text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
