"use client"

import Image from "next/image";
import { useState } from "react";

export type QuestItemProps = {
    name: string;
    requirements: {amount: number; src: string;}[];
    rewards: {amount: number; src: string;}[];
    onNotifyParent: (arg: QuestItemProps) => void;
};

export default function QuestItem(props: QuestItemProps){

    const [isDimmedList, setIsDimmedList] = useState<boolean[]>(
        new Array(props.requirements.reduce((accumulator, currentItem) => {return accumulator + currentItem.amount;}, 0)).fill(false)
    );

    const toggleDim = (index: number) => {
        setIsDimmedList((prevList) =>
            prevList.map((isDimmed, i) => (i === index ? !isDimmed : isDimmed))
        )
    }

    return (
        <div className="flex flex-1 w-full min-h-20 flex-row items-center bg-gray-700 my-2 rounded-xl ring-4 ring-gray-600">
            <div className="flex flex-1 max-w-3/10 mx-2 flex-row items-center justify-center px-6 rounded-xl">
            <p className="font-comfortaa font-semibold text-xl">{props.name}</p>
            </div>
            <div className="flex flex-1 max-w-4/10 min-h-16 flex-row items-center justify-center px-6 bg-gray-600 rounded-xl">
                {props.requirements.map((requirement, requirementIndex, allRequirements) => (
                    [...Array(requirement.amount)].map((e, markIndex) => {
                        const totalMarkIndex = allRequirements.slice(0, requirementIndex).reduce((acc, current) => acc + current.amount, 0) + markIndex;
                        return(
                        <Image key={totalMarkIndex} alt="" width={50} height={50}
                            className={`transition duration-300 ${isDimmedList[totalMarkIndex] ? 'brightness-50 grayscale' : 'brightness-100 hover:scale-120'}`} 
                            src={requirement.src}
                            onClick={()=> toggleDim(totalMarkIndex)}
                            />
                        )
                    }
                    )
                ))}
            </div>
            <div className="flex flex-1 max-w-2/10 mx-2 min-h-16 flex-row items-center justify-center px-6 bg-gray-600 rounded-xl">
                {props.rewards.map((reward, index) => (
                    [...Array(reward.amount)].map((e, i) => <Image key={i} alt="" width={50} height={50} src={reward.src}/>)
                ))}
            </div>
            <div 
                className="flex flex-1 max-w-10 h-10 flex-row items-center justify-center bg-gray-900 rounded-xl border-4 border-black hover:bg-gray-400"
                onClick={() => props.onNotifyParent(props)}
                >
            </div>
        </div>
    );
};