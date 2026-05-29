import QuestItem, {QuestItemProps} from "./questItem";

export type QuestBookSlotProps = {
    emptyString: string;
    quest: QuestItemProps;
    onClickSlot: () => void;
};

export default function QuestBookSlot(props: QuestBookSlotProps){
    return (
        <div className="flex flex-1 min-w-97/100 max-h-20 flex-row items-center justify-center bg-gray-900 mx-2 my-2 rounded-xl border-4 border-black">
            {props.quest.name !== "Empty" ? (
                <QuestItem {...props.quest} onClickButton={props.onClickSlot}/>
            ) : (
                <p className="font-comfortaa font-semibold text-xl text-gray-500">{props.emptyString}</p>
            )}
        </div>
    );
};

