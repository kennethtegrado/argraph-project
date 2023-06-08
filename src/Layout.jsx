import { Outlet, NavLink } from "react-router-dom";

import { DiGitMerge } from "react-icons/di";
import { HiGlobeAlt } from "react-icons/hi";
import { FaCheckDouble } from "react-icons/fa";
import ArgumentModal from "./components/ArgumentModal";

import useStore from "./store";
import { AcceptedModal } from "./components";

export default () => {
    const result = useStore((state) => state.result);
    const conclusionString = useStore((state) => state.conclusionString);
    const message = useStore((state) => state.message);

    return (
        <main className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative">
                <div className="w-full navbar bg-base-300 block lg:hidden flex items-center gap-3">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-2"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 font-bold text-xl">
                        Ar<span className="text-primary">graph</span>{" "}
                    </div>
                </div>
                {/* modal */}
                {result !== null ? (
                    !result ? (
                        <div className="alert alert-error absolute max-w-5xl bottom-10 left-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{message}</span>
                        </div>
                    ) : undefined
                ) : undefined}

                <section className="p-10">
                    <Outlet />
                </section>
            </div>
            <header className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <div className="mb-10 flex gap-2 items-center">
                        <h1 className="font-bold text-2xl">
                            {" "}
                            Ar<span className="text-primary">graph</span>{" "}
                        </h1>
                        <span className="badge badge-primary text-white">
                            Project
                        </span>
                    </div>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            <DiGitMerge />
                            Graph Tool
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/axiomatic-system"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            <HiGlobeAlt />
                            Axiomatic System
                        </NavLink>
                    </li>
                    <li>
                        {" "}
                        <NavLink
                            to="/validating-argument"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            <FaCheckDouble className="text-xs" />
                            Validating Arguments
                        </NavLink>
                    </li>
                    <li className="my-10"></li>
                    <button
                        className="btn btn-primary my-10"
                        onClick={() => window.visualize_modal.showModal()}
                    >
                        Visualize
                    </button>
                    <div className="flex flex-col w-80 items-center gap-5 absolute bottom-10 left-1/2 -translate-x-1/2">
                        <h5 className="font-bold">Submitted by:</h5>
                        <ul className="flex flex-col gap-2">
                            <li>Llamas, Charles Gabriel</li>
                            <li>Macandile, Franzeane Amiellah</li>
                            <li>Reyes, Amelle</li>
                            <li>Tegrado, Kenneth Renz</li>
                        </ul>
                    </div>
                </ul>
            </header>

            <ArgumentModal />
            <AcceptedModal />
        </main>
    );
};
