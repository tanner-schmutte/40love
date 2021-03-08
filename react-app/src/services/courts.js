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
