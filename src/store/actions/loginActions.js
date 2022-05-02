export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const LOGIN_OPEN = 'LOGIN_OPEN';

export const openLogin = () => ({
    type: LOGIN_OPEN,
    open: true
});

export const closeLogin = () => ({
    type: LOGIN_OPEN,
    open: false
});

export const setEmail = (email) => ({
    type: LOGIN_EMAIL,
    email
});
