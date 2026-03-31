import { create } from "zustand";

type ToastType = "success" | "error";

export const useToast = create<{
  message: string | null;
  type: ToastType;
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
}>((set) => ({
  message: null,
  type: "error",
  showToast: (message, type) => set(() => ({ message, type })),
  hideToast: () => set(() => ({ message: null })),
}));

// Quick toast function for easy use anywhere
export const toast = (message: string, type: ToastType) => {
  useToast.getState().showToast(message, type);
};
