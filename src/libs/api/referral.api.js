// const BASE_URL = process.env.BACKEND_URL;
const BASE_URL = "http://localhost:3001/";

export const createReferral = async (email, name) => {
    try {
        const response = await fetch(`${BASE_URL}api/referrer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name }),
        });

        if (!response.ok) {
            throw new Error('Failed to create referral');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating referral:', error);
        throw error;
    }
};

export const getReferrer = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}api/referrer/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to get referrer');
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting referrer:', error);
        throw error;
    }
};

export const redeemReferral = async (refereeEmail, refereeName, referrerEmail, referralCode) => {
    try {
        const response = await fetch(`${BASE_URL}api/referee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refereeEmail, refereeName, referrerEmail, referralCode }),
        });

        if (!response.ok) {
            throw new Error('Failed to redeem referral');
        }

        return await response.json();
    } catch (error) {
        console.error('Error redeeming referral:', error);
        throw error;
    }
};