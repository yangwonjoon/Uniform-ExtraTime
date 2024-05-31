import { useState } from 'react'
import {
  validateEmail,
  validatePassword,
  validateName,
} from '@/utils/validation'
import signUpUser from '@/api/signup/signUpUser'
import createUserProfile from '@/api/signup/createUserProfile'
import { ISignUpFormData } from '@/types/types'
import { useNavigate } from 'react-router-dom'

export const useSignUp = (isSeller: boolean) => {
  const date = new Date()
  const navigate = useNavigate()
  const [msg, setMsg] = useState('')
  const [signUpFormData, setSignUpFormData] = useState<ISignUpFormData>({
    email: '',
    password: '',
    name: '',
    nickname: '',
    isSeller,
    createdAt: date,
    updatedAt: date,
  })

  const signUp = async () => {
    if (!validateEmail(signUpFormData.email)) {
      setMsg('email 형식에 맞춰 주세요')
      return
    }
    if (!validatePassword(signUpFormData.password)) {
      setMsg(
        '비밀번호는 영어 대문자, 소문자, 숫자, 특수문자 중 2종류 문자 조합으로 구성해주세요',
      )
      return
    }
    if (!validateName(signUpFormData.name)) {
      setMsg('이름을 입력해주세요')
      return
    }
    if (!validateName(signUpFormData.nickname)) {
      setMsg('닉네임을 입력해주세요')
      return
    }

    try {
      // firebase auth 회원가입(email, password)
      const uid = await signUpUser(
        signUpFormData.email,
        signUpFormData.password,
      )
      // fireStore에 uid로 signUpFormData 저장
      await createUserProfile(uid, signUpFormData)
      alert('회원가입에 성공하였습니다!')
      navigate('/login')
    } catch (error) {
      setMsg('회원가입이 실패하였습니다')
    }
  }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value })
  }

  return { signUpFormData, setSignUpFormData, msg, signUp, inputChange }
}

export default useSignUp
