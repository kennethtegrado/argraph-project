import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

import {
    TbSquareRoundedChevronDownFilled,
    TbSquareRoundedChevronUpFilled,
} from "react-icons/tb";

export default ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    return (
        <div
            ref={parent}
            className="max-w-5xl shadow-md shadow-secondary/25 rounded-md"
        >
            <div
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer bg-neutral p-5 rounded-md flex justify-between items-center"
            >
                <h1 className="text-lg font-bold">{title}</h1>
                <span className="text-primary text-xl">
                    {!open ? (
                        <TbSquareRoundedChevronDownFilled />
                    ) : (
                        <TbSquareRoundedChevronUpFilled />
                    )}
                </span>
            </div>
            {open ? (
                <div className="px-5 py-4 bg-neutral-focus rounded-b-md">
                    {children}
                </div>
            ) : undefined}
        </div>
    );
};
