export const GET_IMAGES = 'get_images';
export const GET_IMAGE_BY_ID = 'get_image_by_id';

export const getImages = images => dispatch => {
  dispatch({
    type: GET_IMAGES,
    payload: images,
  });
};

export const getImageById = image => dispatch => {
  dispatch({
    type: GET_IMAGE_BY_ID,
    payload: image,
  });
};
