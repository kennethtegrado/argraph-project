import { useState, useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";

import useStore from "../store";

const style = [
    {
        selector: "node",
        style: {
            width: 30,
            height: 30,
            backgroundColor: "#1eb854",
            label: "data(label)", // Use the label from the node data
            color: "#3abff8", // Set the default label color
            "font-family": "Fira Code, monospace",
            "text-halign": "center", // Align the label horizontally to the center
            "text-valign": "top", // Position the label on top
            "font-weight": "bold",
        },
    },
    {
        selector: "edge",
        style: {
            "line-color": "#1db9ac",
            "target-arrow-color": "#1db990",
            "target-arrow-shape": "triangle",
            "curve-style": "unbundled-bezier",
        },
    },
];

export default ({ data, clearData, type, conclusion }) => {
    const [cy, setCy] = useState(null);
    const [checkNode, setCheckNode] = useState(null);

    const result = useStore((state) => state.result);
    const acceptResult = useStore((state) => state.acceptResult);
    const rejectResult = useStore((state) => state.rejectResult);
    const propositions = useStore((state) => state.propositions);

    const handleValidate = async () => {
        for (const propo of propositions) {
            const res = await bfsSimulation(propo, propositions);

            if (!res) return;
        }
        checkConclusion(conclusion[0], conclusion[1], propositions);
    };

    const checkConclusion = async (startNodeId, endId, propos) => {
        const visited = new Set();
        const queue = [];

        const negated = {};
        const normal = {};

        for (let propo of propos) {
            propo = propo.replace(/\bnot\b/, "").trim();
            negated[propo] = false;
            normal[propo] = false;
        }

        const startNode = cy.getElementById(startNodeId);

        // Mark start node as visited and enqueue it
        visited.add(startNode.id());
        queue.push(startNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            setCheckNode(currentNode.id());
            const id = currentNode
                .id()
                .replace(/\bnot\b/, "")
                .trim();

            if (/\bnot\b/.test(currentNode.id())) negated[id] = true;
            else normal[id] = true;

            if (normal[id] && negated[id]) {
                rejectResult(
                    `Argument is invalid because there's a contradiction on node ${startNodeId}.`
                );
                startNode.style("background-color", "#f87272");

                return false;
            }

            if (currentNode.id() === endId) {
                acceptResult();
                return;
            }

            // Perform BFS logic on currentNode
            // e.g., change the style or perform any desired action
            currentNode.style("background-color", "#1db9ac");
            currentNode.style("border-color", "#1eb854");
            currentNode.style("border-width", "4px");

            // Iterate through the edges connected to the currentNode
            const connectedEdges = await currentNode.connectedEdges();

            for (let i = 0; i < connectedEdges.length; i++) {
                const edge = connectedEdges[i];

                // Highlight the edge
                edge.style("line-color", "#fbbd23");
                edge.style("line-style", "dashed");
                edge.style("width", "3px");

                // Highlight the target node of the edge
                const targetNode = edge.target();

                // Enqueue the unvisited neighboring nodes
                if (!visited.has(targetNode.id())) {
                    visited.add(targetNode.id());
                    queue.push(targetNode);
                }

                // Wait for 1 second before processing the next edge
                await delay(300);
            }
        }
        rejectResult(
            `The conclusion does not logically follow the premises since the proposition is not reachable.`
        );
        return true;
    };

    const bfsSimulation = async (startNodeId, propos) => {
        const visited = new Set();
        const queue = [];

        const negated = {};
        const normal = {};

        for (let propo of propos) {
            propo = propo.replace(/\bnot\b/, "").trim();
            negated[propo] = false;
            normal[propo] = false;
        }

        const startNode = cy.getElementById(startNodeId);

        // Mark start node as visited and enqueue it
        visited.add(startNode.id());
        queue.push(startNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            setCheckNode(currentNode.id());
            const id = currentNode
                .id()
                .replace(/\bnot\b/, "")
                .trim();

            if (/\bnot\b/.test(currentNode.id())) negated[id] = true;
            else normal[id] = true;

            if (normal[id] && negated[id]) {
                rejectResult(
                    `Argument is invalid because there's a contradictory statement on node ${startNodeId}.`
                );
                startNode.style("background-color", "#f87272");

                return false;
            }

            // Perform BFS logic on currentNode
            // e.g., change the style or perform any desired action
            currentNode.style("background-color", "#1db9ac");
            currentNode.style("border-color", "#1eb854");
            currentNode.style("border-width", "4px");

            // Iterate through the edges connected to the currentNode
            const connectedEdges = await currentNode.connectedEdges();

            for (let i = 0; i < connectedEdges.length; i++) {
                const edge = connectedEdges[i];

                // Highlight the edge
                edge.style("line-color", "#fbbd23");
                edge.style("line-style", "dashed");
                edge.style("width", "3px");

                // Highlight the target node of the edge
                const targetNode = edge.target();

                // Enqueue the unvisited neighboring nodes
                if (!visited.has(targetNode.id())) {
                    visited.add(targetNode.id());
                    queue.push(targetNode);
                }

                // Wait for 1 second before processing the next edge
                await delay(300);
            }
        }

        refreshStyle(startNode);

        return true;
    };

    const refreshStyle = (startingNode) => {
        const visited = new Set();
        const queue = [];

        // Mark start node as visited and enqueue it
        visited.add(startingNode.id());
        queue.push(startingNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();

            // Perform BFS logic on currentNode
            // e.g., change the style or perform any desired action
            currentNode.style("background-color", "#1eb854");
            currentNode.style("border-color", "#1eb854");
            currentNode.style("border-width", "0");

            // Iterate through the edges connected to the currentNode
            const connectedEdges = currentNode.connectedEdges();

            for (let i = 0; i < connectedEdges.length; i++) {
                const edge = connectedEdges[i];

                // Highlight the edge
                edge.style("line-color", "#1db9ac");
                edge.style("line-style", "solid");
                edge.style("width", "3px");

                // Highlight the target node of the edge
                const targetNode = edge.target();

                // Enqueue the unvisited neighboring nodes
                if (!visited.has(targetNode.id())) {
                    visited.add(targetNode.id());
                    queue.push(targetNode);
                }
            }
        }

        setCheckNode(null);
    };

    const handleCyInit = (cy) => {
        setCy(cy);
    };

    const delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    return (
        <div className="flex flex-col w-full gap-5 items-center">
            {checkNode !== null ? (
                <p>
                    Checking node{" "}
                    <span className="text-primary">{checkNode}</span>
                </p>
            ) : undefined}
            <CytoscapeComponent
                elements={data}
                style={{ width: "100%", height: "70vh" }}
                layout={{ name: "random", idealEdgeLength: 30 }}
                cy={handleCyInit}
                stylesheet={style}
            />
            <div className="flex gap-10">
                <button className="btn btn-primary" onClick={handleValidate}>
                    Validate
                </button>
                <button className="btn" onClick={clearData}>
                    Remove Graph
                </button>
            </div>
        </div>
    );
};
