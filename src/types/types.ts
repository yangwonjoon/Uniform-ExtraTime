export interface ISignUpFormData {
    email: string,
    password: string,
    name: string,
    nickname: string,
    isSeller: boolean,
    createdAt: Date,
    updatedAt: Date
}

export interface ISignUpFormProps {
    isSeller: boolean,
    name: string
}

export interface ILoginFormData {
    email: string,
    password: string
}