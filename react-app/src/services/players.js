export const getPlayer = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
};

export const requestHit = async (date, requesteeId, courtId) => {
    const res = await fetch(`/api/players/${requesteeId}/hits`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date,
            courtId,
        }),
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
