import { SignUpForm } from "@/components/signup/SignUpForm"

export const CustomerSignUp = () => {
    return (
        <SignUpForm isSeller={false} name={'Buyer'}></SignUpForm>
    )
}