import { SignUpForm } from "@/components/signup/SignUpForm";

export const SellerSignUp = () => {
    return (
        <SignUpForm isSeller={true} name={'Seller'}></SignUpForm>
    )
}