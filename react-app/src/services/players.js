export const getPlayer = async (playerId) => {
    const res = await fetch(`/api/players/${playerId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await res.json()
};
