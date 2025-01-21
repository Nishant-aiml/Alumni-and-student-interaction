import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
        }) => void;
      };
    };
  }
}

const LearnWithAI: React.FC = () => {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '66ddc0e310d1d587421493be' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Learn with AI</h1>
        <p className="text-gray-600 mb-8">
          Chat with our AI tutor to get personalized learning assistance and guidance.
          Ask questions, get explanations, or explore new topics - I'm here to help!
        </p>
        {/* The Voiceflow chat widget will be automatically injected here */}
      </div>
    </div>
  );
};

export default LearnWithAI;
