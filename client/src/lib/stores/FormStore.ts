import create from "zustand";

const useFormStore = create((set) => ({
    question: "",
    currPage: 0,
    maxPage: 2,
    setQuestion: (input: String) => set({ question: input }),
    nextPage: () =>
        set((state: any) => ({
            currPage:
                state.currPage + 1 <= state.maxPage
                    ? state.currPage + 1
                    : state.maxPage,
        })),
    prevPage: () =>
        set((state: any) => ({
            currPage: state.currPage - 1 >= 0 ? state.currPage - 1 : 0,
        })),
}));

export default useFormStore;
