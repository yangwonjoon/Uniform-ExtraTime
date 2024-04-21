export interface User {
    email: string;
    name: string;
    nickname: string;
    uid: string;
    isSeller: boolean;
}

export interface UserState {
    user: User;
    setUser: (user: User) => void;
}

