import { create } from 'zustand';

type OverlayStore = {
  isOpen: boolean;
  toggleOverlay: () => void;
};

export const useOverlayStore = create<OverlayStore>((set) => ({
  isOpen: false,
  toggleOverlay: () => set((state) => ({ isOpen: !state.isOpen }))
}));
