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


// TODO: new function here to setDefaultCourt()
// Let's do it
// For real

export const chooseCourt = (courtId) => async (dispatch) => {
    const res = await fetch(`/api/courts/${courtId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const court = await res.json();

    dispatch(setCourt(court))
};

export default function reducer(state = { court: false }, action) {
    switch (action.type) {
        case COURT:
            return { ...state, court: action.court };
        default:
            return state;
    }
}
