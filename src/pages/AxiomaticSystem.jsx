import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

import directedEdge from "../assets/directed_edge.png";
import graphImg from "../assets/graph.png";
import shockImg from "../assets/shock.svg";
import reflexiveImg from "../assets/reflexive_node.png";
import transitiveEdges from "../assets/transitive_edges.png";
import contradictivity from "../assets/contradictivity.png";
import consistencyImg from "../assets/consistency.png";

import { AccordionItem } from "../components";

export default () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5 max-w-5xl">
                <h1 className="text-4xl font-bold">Argraph Axiomatic System</h1>
                <p>
                    The argraph axiomatic system is to evaluate the validity of
                    arguments using graph theory principles. Through a series of{" "}
                    <strong className="text-secondary">axioms</strong> and{" "}
                    <strong className="text-secondary">theorems</strong>, the
                    system establishes foundational principles and logical
                    properties that guides the tool for validating arguments.
                </p>
                <p>
                    The system leverages graph theory concepts, such as{" "}
                    <em className="text-accent bg-accent-content p-1 rounded-md">
                        transitivity
                    </em>{" "}
                    and{" "}
                    <em className="text-accent bg-accent-content p-1 rounded-md">
                        connectivity
                    </em>
                    , the system allows us to evaluate the soundness and
                    coherence of an argument. It offers a formalized approach to
                    reasoning and enables us to gain insights into the
                    relationships between propositions within an argument. By
                    employing this system, we can delve into the intricacies of
                    logical connections and strengthen our ability to assess the
                    validity of arguments in various domains of discourse.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-5">Defined Terms</h2>
                <p className="max-w-5xl my-4">
                    In the argraph axiomatic system, several terms are defined
                    to provide a clear understanding of the system's elements
                    and their relationships. These defined terms include:
                </p>
                <div className="flex flex-col gap-5">
                    <AccordionItem title="Nodes">
                        <p>
                            A{" "}
                            <strong>
                                <span className="text-primary">node</span>
                            </strong>
                            , within the context of the argraph axiomatic
                            system, is a specific object, concept, or variable
                            in the universe of discourse. It serves as an entity
                            or element bounded in a proposition.
                            <ul className="list-disc px-5 mt-5">
                                <li>
                                    For instance, let{" "}
                                    <span className="text-primary">x</span> be a
                                    node in the argraph axiomatic system,
                                    denoting a distinct entity within the
                                    universe of discourse.
                                </li>
                            </ul>
                        </p>
                        <div className="flex gap-10 my-5">
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-primary rounded-full"></div>
                                <p>Boy</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-primary rounded-full"></div>
                                <p>Sleeping</p>
                            </div>{" "}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-primary rounded-full"></div>
                                <p>Lion</p>
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem title="Directed Edge">
                        <p>
                            A{" "}
                            <strong>
                                <span className="text-primary">
                                    directed edge
                                </span>
                            </strong>
                            , within the context of the argraph axiomatic
                            system, represents a relationship between entities,
                            where it signifies that one entity is a component or
                            part of another entity.
                        </p>
                        <ul className="list-disc px-5 mt-5">
                            <li>
                                For instance, the directed edge, from{" "}
                                <span className="text-primary">node A</span> to{" "}
                                <span className="text-primary">node B</span>,
                                denotes that{" "}
                                <span className="text-primary">entity A</span>{" "}
                                is a part of{" "}
                                <span className="text-primary">entity B</span>.
                            </li>
                        </ul>
                        <div className="my-10 flex flex-col items-center">
                            {" "}
                            <img
                                src={directedEdge}
                                alt="Illustration of the directed edge A to B"
                            />
                            <p className="mt-2">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                Illustration of the directed edge from node A to
                                node B.
                            </p>
                        </div>
                    </AccordionItem>
                    <AccordionItem title="Graph">
                        <p>
                            A{" "}
                            <strong>
                                <span className="text-primary">graph</span>
                            </strong>
                            , in the context of the Argraph axiomatic system,
                            represents the logical structure of the argument by
                            linking premises together. The graph creates a
                            visual representation of the flow of ideas in an
                            argument and how they logically fit together.
                        </p>

                        <div className="my-10 flex flex-col items-center">
                            {" "}
                            <img src={graphImg} alt="Illustration of a graph" />
                            <p className="mt-2">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                Illustration of graph representing the structure
                                of premises.
                            </p>
                        </div>
                    </AccordionItem>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-5">Undefined Terms</h2>
                <p className="max-w-5xl my-4">
                    In the argraph axiomatic system, there are several undefined
                    terms that are not explicitly defined within the system but
                    are assumed to be understood within the context of the
                    problem domain. These undefined terms include:
                </p>
                <div className="flex flex-col gap-5">
                    <AccordionItem title="Argument">
                        <p>
                            An argument refers to a set of propositions or
                            statements, typically presented in a logical
                            sequence, where one or more premises are provided as
                            evidence or support for a conclusion. While the term
                            "argument" is not formally defined within the
                            argraph axiomatic system, it serves as the
                            overarching concept that the system aims to analyze
                            and evaluate for validity.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Validity">
                        <p>
                            Validity relates to the logical correctness or
                            soundness of an argument. It indicates whether the
                            conclusion follows logically from the given
                            premises. In the context of the argraph axiomatic
                            system, the concept of validity is assumed to be
                            understood, but it is not explicitly defined within
                            the system.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Logical Relationship">
                        <p>
                            A logical relationship refers to the connection or
                            dependency between entities in a premise. In the
                            Argraph axiomatic system, the words{" "}
                            <span className="text-primary bg-accent-content rounded-md p-1">
                                is and are
                            </span>{" "}
                            denotes that an entity is part of another entity.
                            While the word{" "}
                            <span className="text-primary bg-accent-content rounded-md p-1">
                                not
                            </span>{" "}
                            is used to denote that an entity is part of another
                            entity that is not the entity it is connected with.
                        </p>
                    </AccordionItem>
                </div>
            </div>
            <Axioms />
        </div>
    );
};

const Axioms = () => {
    const [open, setOpen] = useState(false);
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    return (
        <div
            className="bg-accent-content p-10 max-w-5xl shadow-lg shadow-secondary/25 rounded-md"
            ref={parent}
        >
            {open ? (
                <>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">Axioms</h2>
                        <p>
                            The following axioms serve as the fundamental
                            principles for how the Argraph Axiomatic System will
                            work. These axioms serve as starting points, assumed
                            to be true or self-evident, from which further
                            reasoning and deductions are derived.
                        </p>
                    </div>
                    <ul className="list-disc px-10">
                        <li>
                            <strong className="text-primary">
                                Proposition format
                            </strong>{" "}
                            - All propositions follow the{" "}
                            <strong className="text-primary">
                                "A is/are B"
                            </strong>{" "}
                            format, where A and B represent distinct entities.
                        </li>
                        <li>
                            <strong className="text-primary">
                                Negated inclusion
                            </strong>{" "}
                            - All propositions use{" "}
                            <strong className="text-primary">"not"</strong> to
                            denote that an entity A is not a part of entity B.
                        </li>
                        <li>
                            <strong className="text-primary">Identity</strong> -
                            For any entity{" "}
                            <strong className="text-primary">x</strong>,{" "}
                            <strong className="text-primary">x</strong> is
                            identical to itself. In other words, any identity is
                            always identical to itself and shares all of its
                            properties and characteristics with itself.
                        </li>
                        <li>
                            <strong className="text-primary">
                                Node existence
                            </strong>{" "}
                            - There exists at least one node in the graph.
                        </li>
                        <li>
                            <strong className="text-primary">
                                Edge existence
                            </strong>{" "}
                            - There exists at least one edge in the graph.
                        </li>
                        <li>
                            <strong className="text-primary">
                                Unique existence
                            </strong>{" "}
                            - A node in the graph represent a distinct entity in
                            the universe of discourse.
                        </li>
                        <li>
                            <strong className="text-primary">
                                Directed edge
                            </strong>{" "}
                            - A directed edge links an entity as a part of
                            another entity.
                        </li>
                    </ul>

                    <div className="my-5">
                        <h2 className="text-2xl font-bold mb-2">Theorems</h2>
                        <p>
                            The following collection of theorems expands upon
                            the axioms, offering valuable insights into the
                            connectivity, transitivity, and compositional
                            aspects of the argraph axiomatic system. Each
                            theorem contributes to the overall understanding and
                            analysis of arguments, further establishing the
                            robustness and validity of the Argraph axiomatic
                            system.
                        </p>
                    </div>
                    <ul className="list-disc px-10 flex flex-col gap-4">
                        <li>
                            <strong className="text-primary">
                                Reflexive Property of Nodes
                            </strong>{" "}
                            - Every node is connected to itself by a reflexive
                            directed edge.
                            <img
                                src={reflexiveImg}
                                alt="Loop edge of a node"
                                className="max-w-xs mt-5 mx-auto"
                            />{" "}
                            <p className="mt-2 text-center">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                Reflexive property of nodes. Each node is a
                                component of itself.
                            </p>
                        </li>
                        <li>
                            <strong className="text-primary">
                                Transitive Property of Edges
                            </strong>{" "}
                            - If there is a directed edge from node A to node B
                            and another directed edge from node B to node C,
                            then there exists a directed edge from node A to
                            node C.
                            <img
                                src={transitiveEdges}
                                alt="Transitivity property of edges"
                                className="max-w-sm mt-5 mx-auto"
                            />{" "}
                            <p className="mt-2 text-center">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                If node A is a component of node B and node B is
                                a component of node C, then node A is a
                                component of node C.
                            </p>
                        </li>
                        <li>
                            {" "}
                            <strong className="text-primary">
                                Reachability
                            </strong>{" "}
                            - A proposition is reachable, if and only if, there
                            exists a directed edge that can be derived from a
                            graph to represent it. When a proposition is
                            reachable, it can be derived from the set of
                            premises.
                            <img
                                src={graphImg}
                                alt="Theorem of reachability"
                                className="max-w-4xl mt-5 mx-auto"
                            />{" "}
                            <p className="mt-2 text-center">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                The proposition{" "}
                                <span className="text-primary">
                                    boy is not bad
                                </span>{" "}
                                is reachable in this graph, since a directed
                                edge can be derived from the set of premises to
                                represent it.
                            </p>
                        </li>
                        <li>
                            <strong className="text-primary">
                                Contradiction
                            </strong>{" "}
                            - If node A is a component of node B, then node A
                            can not be a component of node Not B.
                            <img
                                src={contradictivity}
                                alt="Contradictivity"
                                className="max-w-sm mt-5 mx-auto"
                            />{" "}
                            <p className="mt-2 text-center">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                This is an invalid argument, since node A
                                violates the theorem of contradiction.
                            </p>
                        </li>
                        <li>
                            <strong className="text-primary">
                                Consistency
                            </strong>{" "}
                            - A graph is consistent, if and only if, each node
                            does not violate the theorem of contradiction. When
                            a graph is consistent, it means that premises are
                            logically coherent.
                            <img
                                src={consistencyImg}
                                alt="Theorem of consistency"
                                className="max-w-sm mt-5 mx-auto"
                            />{" "}
                            <p className="mt-2 text-center">
                                <em className="text-secondary">
                                    <span>Figure:</span>{" "}
                                </em>
                                This graph is inconsistent, because node Boy
                                violates the theorem of contradiction.
                            </p>
                        </li>
                        <li>
                            <strong className="text-primary">Argraph</strong> -
                            A graph represents a valid argument, if and only if,
                            it is consistent and the conclusion is reachable.
                        </li>
                    </ul>
                </>
            ) : (
                <div className="w-full flex flex-col items-center gap-4">
                    <img src={shockImg} className="max-w-lg" />
                    <button
                        className="btn btn-primary"
                        onClick={() => setOpen(true)}
                    >
                        Open Surprise
                    </button>
                </div>
            )}
        </div>
    );
};
