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

export interface CartStore {
    cart: string[];
    cartLength: () => number;
    setCart: (productId: string) => void;
    addCart: (productId: string) => void;
    removeCart: (productId: string) => void;
}