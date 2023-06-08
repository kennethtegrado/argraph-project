import { create } from "zustand";

export default create((set) => ({
    data: [],
    conclusion: [],
    propositions: [],
    result: null,
    conclusionString: "",
    message: "",
    setData: (userInput) => {
        const items = [];
        const propositions = [];
        const keys = new Set();
        // processInput
        for (const line of userInput.slice(0, userInput.length - 1)) {
            let processedLine = line
                .toLowerCase()
                .split(/\b(?:is|are)\b/)
                .map((item) => item.trim());

            const key = processedLine[0];
            const value = processedLine[1];

            keys.add(key);
            keys.add(value);

            items.push({ data: { source: key, target: value } });
        }

        for (const key of keys) propositions.push(key);

        const conclusion = userInput[userInput.length - 1]
            .toLowerCase()
            .replace("therefore, ", "")
            .split(/\b(?:is|are)\b/)
            .map((item) => item.trim());

        const key = conclusion[0];
        const value = conclusion[1];

        keys.add(key);
        keys.add(value);

        for (const key of keys)
            items.push({
                data: {
                    id: key,
                    label: `${key[0].toUpperCase()}${key.slice(1)}`,
                },
            });

        set((_) => ({
            data: [...items],
            conclusion: [key, value],
            conclusionString: userInput[userInput.length - 1].trim(),
            propositions,
        }));
    },
    acceptResult: async () => {
        set((_) => ({ result: true }));
        window.accepted_modal.showModal();

        setInterval(() => set((_) => ({ result: null })), 10000);
    },
    rejectResult: async (message) => {
        set((_) => ({ result: false, message }));

        setInterval(() => set((_) => ({ result: null, message: "" })), 10000);
    },
    clearData: () =>
        set((_) => ({
            data: [],
            conclusion: [],
            conclusionString: "",
            propositions: [],
        })),
}));
