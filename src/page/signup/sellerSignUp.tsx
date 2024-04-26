import { SignUpForm } from "@/components/SignUpForm";

export const SellerSignUp = () => {
    return (
        <SignUpForm isSeller={true} name={'판매자'}></SignUpForm>
    )
}