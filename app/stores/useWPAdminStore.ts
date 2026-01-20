"use client";

import { create } from "zustand";

interface WPAdminStore {
	isEnabled: boolean;
	toggleShell: () => void;
	setEnabled: (enabled: boolean) => void;
}

export const useWPAdminStore = create<WPAdminStore>((set) => ({
	isEnabled: true,

	toggleShell: () => {
		set((state) => ({ isEnabled: !state.isEnabled }));
	},

	setEnabled: (enabled: boolean) => {
		set({ isEnabled: enabled });
	},
}));
