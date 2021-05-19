const PROFILE_PIC = 'PROFILE_PIC';

const setPhoto = (photo) => ({
    type: PROFILE_PIC,
    photo,
});

export const uploadFile = (fileForm) => async (dispatch) => {
    const { user_id, file } = fileForm;

    const form = new FormData();
    form.append('user_id', user_id);
    form.append('file', file);

    const res = await fetch('/api/<route>', {
        method: 'POST',
        body: form,
    });
};

export default function reducer(state = { })