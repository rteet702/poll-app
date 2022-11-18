import { useState, useEffect, FormEventHandler, FormEvent } from "react";
import useFormStore from "../../lib/stores/FormStore";

export const PollForm = (props: any) => {
    const currPage = useFormStore((state: any) => state.currPage);
    const prevPage = useFormStore((state: any) => state.prevPage);
    const nextPage = useFormStore((state: any) => state.nextPage);
    const maxPage = useFormStore((state: any) => state.maxPage);
    const [pages, setPages] = useState<any[]>([]);

    useEffect(() => {
        if (props.children && props.children.length) {
            setPages([...props.children]);
        } else {
            setPages([props.children]);
        }
    }, []);

    const submitHandler: FormEventHandler = (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        console.log();
    };

    return (
        <form
            className="flex-[3] flex flex-col items-center justify-between border-2 p-4 bg-orange-50 rounded-lg shadow-xl"
            onSubmit={submitHandler}
        >
            <p>{currPage}</p>
            {pages[currPage]}
            <div className="flex justify-end items-center w-full gap-5">
                {currPage > 0 ? (
                    <button
                        onClick={prevPage}
                        className="rounded-lg px-3 py-1 border-2 bg-white border-orange-400 hover:bg-orange-400 mt-3 transition-colors"
                    >
                        Previous
                    </button>
                ) : null}
                {currPage < maxPage ? (
                    <button
                        onClick={nextPage}
                        className="rounded-lg px-3 py-1 border-2 bg-white border-orange-400 hover:bg-orange-400 mt-3 transition-colors"
                    >
                        Continue
                    </button>
                ) : null}
                {currPage === maxPage ? (
                    <button
                        type="submit"
                        className="rounded-lg px-3 py-1 border-2 bg-white border-orange-400 hover:bg-orange-400 mt-3 transition-colors"
                    >
                        Submit
                    </button>
                ) : null}
            </div>
        </form>
    );
};
