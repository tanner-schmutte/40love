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

export const checkForHitRequest = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}/hits`, {
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
