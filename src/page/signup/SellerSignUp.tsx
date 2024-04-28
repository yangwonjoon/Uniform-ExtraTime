import { SignUpForm } from "@/components/signup/SignUpForm";

export const SellerSignUp = () => {
    return (
        <SignUpForm isSeller={true} name={'판매자'}></SignUpForm>
    )
}