import { create } from 'zustand';

interface BillingState {
  isReady: boolean;
  setReady: (ready: boolean) => void;
}

export const useBillingStore = create<BillingState>(set => ({
  isReady: false,
  setReady: ready => set({ isReady: ready }),
}));
