import { NEXT_PAGE, PREV_PAGE } from "./types";

const initialState = {
  searchTerm: [],
  searchTermsPerPage: 12,
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case NEXT_PAGE:
      return {
        ...state,
        ...payload,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        payload,
        number: state.currentPage - 1,
      };

    default:
      return initialState;
  }
};
