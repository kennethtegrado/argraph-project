import useStore from "../store";

// img imports
import emptyIllustration from "../assets/empty.svg";

// Component
import { GraphComponent } from "../components";

export default () => {
    const data = useStore((state) => state.data);
    const clearData = useStore((state) => state.clearData);
    const type = useStore((state) => state.type);
    const conclusion = useStore((state) => state.conclusion);

    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold">Graph Visualizing Tool</h1>
            {!data.length ? (
                <div className="flex flex-col w-full items-center gap-5">
                    <img
                        src={emptyIllustration}
                        alt="Feeling empty"
                        className="max-w-2xl"
                    />{" "}
                    <h3 className="text-5xl font-bold text-primary">
                        No Argument
                    </h3>
                    <p className="max-w-xl text-center">
                        It seems like we do not have any data to process at the
                        moment. Kindly press the visualize button to start your
                        validating argument journey!
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => window.visualize_modal.showModal()}
                    >
                        Visualize
                    </button>
                </div>
            ) : (
                <GraphComponent
                    data={data}
                    clearData={clearData}
                    type={type}
                    conclusion={conclusion}
                />
            )}
            <div className="bg-secondary-content h-5/6 shadow-lg"></div>
        </div>
    );
};
