import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState, Dispatch, SetStateAction } from 'react'
import { IProductFormData } from '@/types/types'
import teams from '@/constants/team'

interface ITeams {
  id: number
  logoSvg: string
  logoWebp: string
  name: string
}

interface ITeamModal {
  productFormData: IProductFormData
  setProductFormData: Dispatch<SetStateAction<IProductFormData>>
}

const SellerAddTeam = ({ productFormData, setProductFormData }: ITeamModal) => {
  const [selectedTeam, setSelectedTeam] = useState(0)
  const [msg, setMsg] = useState('')

  const handleSelectTeam = (team: ITeams) => {
    setSelectedTeam(team.id)
    setMsg(team.name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {selectedTeam > 0
            ? teams.find((t) => t.id === selectedTeam)?.name
            : '팀 선택'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>팀 선택</DialogTitle>
          <DialogDescription>유니폼 팀을 선택해주세요</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4 py-4">
          {teams.map((team) => (
            <div key={team.id} className="w-full">
              <picture onClick={() => handleSelectTeam(team)}>
                <source srcSet={team.logoWebp} type="image/webp" />
                <img
                  src={team.logoSvg}
                  alt={team.name}
                  className="w-full h-auto object-contain"
                />
              </picture>
            </div>
          ))}
        </div>
        <DialogFooter className="flex sm:justify-center items-center w-full">
          {msg && <DialogDescription>{msg}</DialogDescription>}
        </DialogFooter>
        <DialogClose asChild>
          <Button
            className="mx-auto"
            type="submit"
            onClick={() =>
              setProductFormData({
                ...productFormData,
                productCategory: selectedTeam,
              })
            }
          >
            저장하기
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default SellerAddTeam
