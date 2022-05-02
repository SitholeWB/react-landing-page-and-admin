export const REGISTER_EMAIL = 'REGISTER_EMAIL';
export const REGISTER_LAST_NAME = 'REGISTER_LAST_NAME';
export const REGISTER_FIRST_NAME = 'REGISTER_FIRST_NAME';
export const REGISTER_LOCATION = 'REGISTER_LOCATION';
export const REGISTER_OPEN = 'REGISTER_OPEN';

export const openRegister = () => ({
    type: REGISTER_OPEN,
    open: true
});

export const closeRegister = () => ({
    type: REGISTER_OPEN,
    open: false
});

export const setEmail = (email) => ({
    type: REGISTER_EMAIL,
    email
});

export const setFirstName = (firstName) => ({
    type: REGISTER_FIRST_NAME,
    firstName
});

export const setLastName = (lastName) => ({
    type: REGISTER_LAST_NAME,
    lastName
});

export const setLocation = (location) => ({
    type: REGISTER_LOCATION,
    location
});
