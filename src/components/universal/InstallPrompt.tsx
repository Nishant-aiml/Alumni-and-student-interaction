import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

let deferredPrompt: any = null;

const InstallPrompt: React.FC = () => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      // Show the install button
      setIsInstallable(true);
    });

    // Listen for successful installation
    window.addEventListener('appinstalled', () => {
      // Clear the deferredPrompt variable
      deferredPrompt = null;
      // Hide the install button
      setIsInstallable(false);
      // Optional: Log the installation to analytics
      console.log('PWA was installed');
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferredPrompt variable since it can't be used again
    deferredPrompt = null;
    setIsInstallable(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!isInstallable || !showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-50">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <Download className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Install AlumNet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Install our app for a better experience with quick access and offline features
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="ml-4 inline-flex flex-shrink-0 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={handleInstallClick}
          className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Install App
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
