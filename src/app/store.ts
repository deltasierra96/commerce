import { create } from 'zustand';

type OverlayStore = {
  isOpen: boolean;
  toggleOverlay: () => void;
  closeOverlay: () => void;
  openOverlay: () => void;
};

export const useOverlayStore = create<OverlayStore>((set) => ({
  isOpen: false,
  toggleOverlay: () => set((state) => ({ isOpen: !state.isOpen })),
  closeOverlay: () => set((state) => ({ isOpen: false })),
  openOverlay: () => set((state) => ({ isOpen: true }))
}));
