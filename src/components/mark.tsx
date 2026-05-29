import Image from "next/image";
import { useState } from "react";

export type MarkProps = {
    src: string;
};

export default function Mark(props: MarkProps){
    const [isDim, setDim] = useState(false);

    return (
        <Image alt="" width={50} height={50}
            className={`transition duration-300 ${isDim ? 'brightness-50 grayscale' : 'brightness-100 hover:scale-120'}`}
            src={props.src}
            onClick={()=> setDim(!isDim)}
            />
    );
};