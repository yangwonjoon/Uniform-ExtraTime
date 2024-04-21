import { create } from 'zustand'
import { ThemeState, UserState, User } from './types';

export const useStore = create<UserState & ThemeState>((set) => ({
    // User state
    user: { name: 'Alice', age: 30 },
    setUser: (user: User) => set({ user }),

    // Theme state
    theme: 'light',
    toggleTheme: () => set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' }))
}));

