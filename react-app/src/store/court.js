const COURT = 'COURT';

const setCourt = (court) => ({
    type: COURT,
    court,
});

export const courtCheck = (courtId) => async (dispatch) => {
    const res = await fetch(`/api/courts/${courtId}/players`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const check = await res.json();

    dispatch(setCourt(check.added));
};

export default function reducer(state = { court: false }, action) {
    switch (action.type) {
        case COURT:
            console.log('action', action);

            return { ...state, court: action.court };
        default:
            return state;
    }
}
