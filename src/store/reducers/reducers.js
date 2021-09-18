import {GET_IMAGES, GET_IMAGE_BY_ID} from '../actions/action';

const initialState = {
  images: [],
  image: {},
};

function imageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES: {
      return {...state, images: action.payload};
    }
    case GET_IMAGE_BY_ID: {
      return {...state, image: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default imageReducer;
