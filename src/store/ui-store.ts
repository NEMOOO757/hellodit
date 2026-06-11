import { create } from 'zustand';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: number;
}

interface UIState {
  isLoading: boolean;
  activeModal: string | null;
  notifications: Notification[];
  
  setLoading: (loading: boolean) => void;
  showModal: (modalId: string) => void;
  hideModal: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  dismissNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isLoading: false,
  activeModal: null,
  notifications: [],
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  showModal: (modalId) => set({ activeModal: modalId }),
  
  hideModal: () => set({ activeModal: null }),
  
  addNotification: (notification) => set((state) => ({
    notifications: [
      ...state.notifications,
      {
        ...notification,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: Date.now(),
      }
    ]
  })),
  
  dismissNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
  
  clearNotifications: () => set({ notifications: [] }),
}));
