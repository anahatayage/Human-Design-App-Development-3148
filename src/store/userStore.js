import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set, get) => ({
      currentUser: null,
      chartData: null,
      chatHistory: [],
      
      setUser: (user) => set({ currentUser: user }),
      
      setChartData: (data) => set({ chartData: data }),
      
      addChatMessage: (message) => set((state) => ({
        chatHistory: [...state.chatHistory, message]
      })),
      
      clearChatHistory: () => set({ chatHistory: [] }),
      
      logout: () => set({ 
        currentUser: null, 
        chartData: null, 
        chatHistory: [] 
      }),
    }),
    {
      name: 'human-design-storage',
    }
  )
);