export type SegmentHeaderProps = {
    name: string;
};

export default function SegmentHeader(props: SegmentHeaderProps){
    return (
        <div className="flex w-full flex-col p-3 items-center content-center justify-between bg-gray-500 rounded-t-xl border-b-4 border-black">
        <p className="font-comfortaa font-semibold text-xl">{props.name}</p>
        </div>
    );
};