import { useNavigate } from "react-router-dom";
export default () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
            <h1 className="text-7xl font-bold text-error">Challenges</h1>
            <button
                className="btn btn-error btn-outline px-10"
                onClick={() => navigate("/")}
            >
                Start
            </button>
        </div>
    );
};
