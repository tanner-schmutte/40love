const PHOTO = 'PHOTO'

const setPhoto = (photo) => ({
    type: PHOTO,
    photo,
});

export const uploadFile = (fileForm) => async (dispatch) => {
    const { user_id, file } = fileForm;

    const form = new FormData();
    form.append('user_id', user_id);
    form.append('file', file);

    const response = await fetch('/api/photos', {
        method: 'POST',
        body: form,
    });

    const photo = await response.json();

    dispatch(setPhoto(photo))
};

export default function reducer(state = { photo }, action) {
    switch (action.type) {
        case PHOTO:
            return { ...state, photo: action.photo };
        default:
            return state;
    }
}