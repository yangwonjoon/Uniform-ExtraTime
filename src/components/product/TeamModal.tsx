import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import liverpool from '../../assets/logo/liverpool.png';
import mancity from '../../assets/logo/mancity.png';
import manu from '../../assets/logo/manu.png';
import realmadrid from '../../assets/logo/realmadrid.png';
import { useState, Dispatch, SetStateAction } from "react";
import { IProductFormData } from "@/types/types";

interface ITeams {
    id: number;
    logo: string;
    name: string;
}

interface ITeamModal {
    productFormData: IProductFormData;
    setProductFormData: Dispatch<SetStateAction<IProductFormData>>;
}

export const TeamModal = ({ productFormData, setProductFormData }: ITeamModal) => {

    const teams = [
        { id: 1, logo: liverpool, name: 'Liverpool' },
        { id: 2, logo: mancity, name: 'Manchester City' },
        { id: 3, logo: manu, name: 'Manchester United' },
        { id: 4, logo: realmadrid, name: 'Real Madrid' }
    ];
    const [team, setTeam] = useState(0)
    const [msg, setMsg] = useState('')

    const handleSelectTeam = (team: ITeams) => {
        setTeam(team.id);
        setMsg(team.name)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">팀 선택</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>팀 선택</DialogTitle>
                    <DialogDescription>
                        유니폼 팀을 선택해주세요
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-4 gap-4 py-4">
                    {teams.map((team, index) => (
                        <div key={index} className="w-full">
                            <img src={team.logo} alt={team.name} className="w-full h-auto" onClick={() => handleSelectTeam(team)} />
                        </div>
                    ))}
                </div>
                <DialogFooter className="flex sm:justify-center items-center w-full">
                    {msg && <>
                        <DialogDescription>
                            {msg}를 선택하셨습니다
                        </DialogDescription>
                    </>}
                </DialogFooter>
                <DialogClose asChild>
                    <Button className="mx-auto" type="submit" onClick={() => setProductFormData({
                        ...productFormData,
                        productCategory: team
                    })}>저장하기</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}