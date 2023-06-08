import useStore from "../store";

import illustration from "../assets/approved.svg";

export default () => {
    const conclusionString = useStore((state) => state.conclusionString);

    return (
        <dialog id="accepted_modal" className="modal">
            <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl p-10 h-3/4"
            >
                <button
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl"
                >
                    ✕
                </button>
                <div className="flex w-full gap-5 flex-col h-full items-center justify-center">
                    {" "}
                    <img
                        src={illustration}
                        alt="Happy person because they are validated."
                        className="max-w-md"
                    />
                    <h3 className="text-2xl font-bold text-center text-primary">
                        Argument is Valid
                    </h3>
                    <p>
                        The conclusion{" "}
                        <span className="text-primary">
                            &quot;{conclusionString}&quot;
                        </span>{" "}
                        logically follows the premises.
                    </p>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
