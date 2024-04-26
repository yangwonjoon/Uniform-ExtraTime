import { SignUpForm } from "@/components/SignUpForm"

export const CustomerSignUp = () => {
    return (
        <SignUpForm isSeller={false} name={'구매자'}></SignUpForm>
    )
}