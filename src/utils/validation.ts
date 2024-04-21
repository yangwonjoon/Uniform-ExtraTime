export const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePassword = (password: string) => {
    if (password.length < 10) {
        return false;
    }
    const typesCount = [/[A-Z]/.test(password), /[a-z]/.test(password), /[0-9]/.test(password), /[\W_]/.test(password)].filter(Boolean).length;
    return typesCount >= 2;
};
export const validateName = (name: string) => /.+/.test(name);