"use client"

import Image from "next/image";
import Mark from "./mark";

export type QuestItemProps = {
    name: string;
    requirements: {amount: number; src: string;}[];
    rewards: {amount: number; src: string;}[];
    onClickButton?: () => void;
};

export default function QuestItem(props: QuestItemProps){
    return (
        <div className="flex flex-1 w-full h-full max-h-20 min-h-20 flex-row items-center justify-between bg-gray-700 my-2 rounded-xl ring-4 ring-gray-600">
            <div className="flex grow max-w-5/20 mx-2 flex-row items-center justify-start px-2 rounded-xl">
            <p className="font-comfortaa font-semibold text-xl">{props.name}</p>
            </div>
            <div className="flex grow min-w-8/20 h-[80%] flex-row items-center justify-start px-6 bg-gray-600 rounded-xl">
                {props.requirements.map((requirement) => (
                    [...Array(requirement.amount)].map((e, i) => (<Mark src={requirement.src} key={i}/>))
                ))}
            </div>
            <div className="flex shrink max-w-4/20 mx-2 h-[80%] flex-row items-center justify-end px-6 bg-gray-600 rounded-xl">
                {props.rewards.map((reward) => (
                    [...Array(reward.amount)].map((e, i) => <Image key={i} alt="" width={46} height={50} src={reward.src}/>)
                ))}
            </div>
            <div 
                className="flex flex-none w-10 h-10 flex-row mr-2 bg-gray-900 rounded-xl border-4 border-black hover:bg-gray-400"
                onClick={() => props.onClickButton?.()}
                >
            </div>
        </div>
    );
};