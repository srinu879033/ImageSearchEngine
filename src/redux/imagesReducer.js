import {
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
} from "./fetchImages";

const initialState = {
  loading: false,
  images: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      action = {};
      return {
        ...state,
        images: [],
        loading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      if (state.images && state.images.results) {
        action.payload.results = state.images.results.concat(
          action.payload.results
        );
      }
      return {
        loading: false,
        images: action.payload,

        error: "",
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        images: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
