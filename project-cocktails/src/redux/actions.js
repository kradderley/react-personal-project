import { NEXT_PAGE, PREV_PAGE } from "./types";


export const nextPage = (currentPage) => {
  return {
    type: NEXT_PAGE,
    payload: currentPage,
    info: "Go on to the next page",
  };
};

export const prevPage = (number) => {
  return {
    type: PREV_PAGE,
    payload: number,
    info: "Return to previous page",
  };
};
