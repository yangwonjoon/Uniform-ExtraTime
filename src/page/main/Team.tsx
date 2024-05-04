import { useState } from 'react';
import { Nav } from "../../components/common/Nav";
import { teams } from "@/constants/team";

export const Team = () => {
    const [teamSeletecd, setTeamSeletce] = useState('')
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Nav />
            <div className="container mx-auto grid grid-cols-4 gap-4 mt-10">
                {teams.slice(0, expanded ? teams.length : 4).map((team, index) => (
                    <div key={index} className="text-center">
                        <p className="text-sm hover:text-gray-900 cursor-pointer font-bold">#{team.koreanName}</p>
                    </div>
                ))}
            </div>
            <div className="text-right mt-4">
                {teams.length > 4 && (
                    <button onClick={handleToggle}>
                        {expanded ? '숨기기' : '더보기'}
                    </button>
                )}
            </div>
        </div>
    );
};
