import React from "react";
import { FirstPage } from "../components/PollForm/Pages/FirstPage";
import { SecondPage } from "../components/PollForm/Pages/SecondPage";
import { ThirdPage } from "../components/PollForm/Pages/ThirdPage";
import { PollForm } from "../components/PollForm/PollForm";

export const Home = () => {
    return (
        <div className="container bg-neutral-100 p-10 rounded-lg shadow-lg flex">
            <div className="flex-[2]">
                <h1 className="text-4xl">Start a poll for any reason.</h1>
                <p>Ask away.</p>
            </div>
            <PollForm>
                <FirstPage />
                <SecondPage />
                <ThirdPage />
            </PollForm>
        </div>
    );
};
