export const getPlayer = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const getPlayerCourts = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/courts`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const addAllCourts = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/add-all-courts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const checkForHitRequest = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/requests`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const requestHit = async (date, requesteeId, court_id) => {
    const res = await fetch(`/api/players/${requesteeId}/requests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date,
            court_id,
        }),
    });

    return await res.json();
};

export const getRequestsReceived = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/requests/received`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const getRequestsSent = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/requests/sent`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const acceptRequest = async (playerId, hitId) => {
    await fetch(`/api/players/${playerId}/requests/received/${hitId}/accept`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const post = await fetch(
        `/api/players/${playerId}/requests/received/${hitId}/accept`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await post.json();
};

export const declineRequest = async (playerId, hitId) => {
    const res = await fetch(
        `/api/players/${playerId}/requests/received/${hitId}/decline`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await res.json();
};

export const getHitsRequester = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/hits/requester`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const getHitsRequestee = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/hits/requestee`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const getReviews = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/reviews`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};
