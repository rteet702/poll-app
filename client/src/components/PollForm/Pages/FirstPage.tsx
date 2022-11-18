import React from "react";
import useFormStore from "../../../lib/stores/FormStore";

export const FirstPage = () => {
    const question = useFormStore((state: any) => state.question);
    const setQuestion = useFormStore((state: any) => state.setQuestion);

    return (
        <>
            <input
                className="w-full p-2 rounded-lg border-2 focus:border-orange-500 focus:outline-none transition-colors"
                type="text"
                placeholder="What is your question?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
        </>
    );
};
