import {
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_REQUEST,
} from "./fetchImages";
import axios from "axios";
export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST,
    payload: {},
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};
export const fetchImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error,
  };
};

export const fetchImages = (search, present) => {
  console.log(present, "passed");

  const Client_ID = "aLe4UlFcWASvI_Y4MSswFT2GAlKt68F9Ik5locbCCS4";

  return (dispatch) => {
    dispatch(fetchImagesRequest);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${present}&per_page=500&query=${search}`,
        {
          headers: {
            Authorization: `Client-ID ${Client_ID} `,
          },
        }
      )
      .then((response) => {
        const images = response.data;
        dispatch(fetchImagesSuccess(images));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchImagesFailure(errMsg));
      });
  };
};
