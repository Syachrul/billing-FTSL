import { create } from 'zustand';

interface PrinterState {
  isConnected: boolean;
  setConnected: (connected: boolean) => void;
}

export const usePrinterStore = create<PrinterState>(set => ({
  isConnected: false,
  setConnected: connected => set({ isConnected: connected }),
}));
