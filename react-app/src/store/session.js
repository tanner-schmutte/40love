const USER = 'session-USER';

const setSession = (user = null) => ({
    type: USER,
    user,
});

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const user = await response.json();
    dispatch(setSession(user));
};

export const login = (username, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
    const user = await response.json();
    if (user.errors) {
        const error = new Error('Something went wrong.');
        error.errors = user.errors;
        throw error;
    }
    dispatch(setSession(user));
};

export const logout = () => async (dispatch) => {
    await fetch('/api/auth/logout', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    dispatch(setSession());
};

export const signUp = (username, ntrp, password) => async (dispatch) => {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            ntrp,
            password,
        }),
    });
    const user = await response.json();
    if (user.errors) {
        const error = new Error('Something went wrong.');
        error.errors = user.errors;
        throw error;
    }
    dispatch(setSession(user));
};

export default function reducer(state = { user: null }, action) {
    switch (action.type) {
        case USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
}
