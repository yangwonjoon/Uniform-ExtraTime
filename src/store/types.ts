export interface User {
    name: string;
    age: number;
}

export interface ThemeState {
    theme: string;
    toggleTheme: () => void;
}

export interface UserState {
    user: User;
    setUser: (user: User) => void;
}