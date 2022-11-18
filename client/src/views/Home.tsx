import React from "react";
import { FirstPage } from "../components/PollForm/Pages/FirstPage";
import { SecondPage } from "../components/PollForm/Pages/SecondPage";
import { ThirdPage } from "../components/PollForm/Pages/ThirdPage";
import { PollForm } from "../components/PollForm/PollForm";

export const Home = () => {
    return (
        <div className="container-custom">
            <div className="card mb-5">
                <h1 className="text-4xl">Pollgram</h1>
            </div>
            <PollForm>
                <FirstPage />
                <SecondPage />
                <ThirdPage />
            </PollForm>
        </div>
    );
};
