export const getAllCourts = async () => {
    const res = await fetch('/api/courts/', {
        headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
};

export const getCourt = async (courtId) => {
    const res = await fetch(`/api/courts/${courtId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const addCourt = async (courtId) => {
    const res = await fetch(`/api/courts/${courtId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const removeCourt = async (courtId) => {
    const res = await fetch(`/api/courts/${courtId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const filterPlayersByCourtAndNtrp = async (courtId, ntrp) => {
    const res = await fetch(`/api/court/${courtId}/ntrp/${ntrp}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};
