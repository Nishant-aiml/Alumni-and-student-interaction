import { toast as hotToast } from 'react-hot-toast';

const toast = {
  success: (message: string) => {
    hotToast.success(message, {
      style: {
        background: '#10B981',
        color: '#FFFFFF',
        padding: '16px',
        borderRadius: '8px',
      },
      iconTheme: {
        primary: '#FFFFFF',
        secondary: '#10B981',
      },
    });
  },
  error: (message: string) => {
    hotToast.error(message, {
      style: {
        background: '#EF4444',
        color: '#FFFFFF',
        padding: '16px',
        borderRadius: '8px',
      },
      iconTheme: {
        primary: '#FFFFFF',
        secondary: '#EF4444',
      },
    });
  },
  info: (message: string) => {
    hotToast(message, {
      style: {
        background: '#3B82F6',
        color: '#FFFFFF',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  },
};

export default toast;
