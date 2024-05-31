import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { UserState, User } from './types'

const userStore = create<UserState>()(
  persist(
    devtools((set) => ({
      user: { email: '', name: '', nickname: '', uid: '', isSeller: false },
      setUser: (user: User) => set({ user }),
    })),
    {
      name: 'userStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default userStore
