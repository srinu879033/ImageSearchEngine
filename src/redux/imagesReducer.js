import {
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
} from "./fetchImages";

const initialState = {
  loading: false,
  images: [],
  error: "",
  pageNumber: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
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
