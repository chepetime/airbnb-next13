import { create } from "zustand";

interface RegisterModalstore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useRegisterModal = create<RegisterModalstore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
