import { useState } from "react";

import useStore from "../store";

import { useNavigate } from "react-router-dom";

export default () => {
    const [argument, setArgument] = useState("");
    const setData = useStore((state) => state.setData);
    const navigate = useNavigate();
    const handleClick = () => {
        const userInput = argument.trim().split("\n");
        setData(userInput);
        navigate("/");
    };

    return (
        <dialog id="visualize_modal" className="modal">
            <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl p-10 h-1/2"
            >
                <button
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl"
                >
                    ✕
                </button>
                <div className="flex w-full gap-5 flex-col h-full">
                    {" "}
                    <h3 className="font-bold text-2xl text-primary">
                        Enter your Argument
                    </h3>
                    <textarea
                        className="textarea textarea-bordered w-full rounded-md h-3/4"
                        placeholder="Let us examine your argument."
                        value={argument}
                        onChange={(e) => setArgument(e.target.value)}
                    ></textarea>
                    {argument.length ? (
                        <button
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Visualize
                        </button>
                    ) : undefined}
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
