import { BACKEND_BASE_URL } from '../../shared/Url'

export const REGISTER = 'REGISTER';
export const ERROR = 'ERROR';

export const register = (userObject) => ({
    type: REGISTER,
    userObject
});

export const error = (error) => ({
    type: ERROR,
    error
});


export function registerUser(userJson) {
    var url = BACKEND_BASE_URL + 'users';

    return async dispatch => {
        dispatch(register({
            about: null,
            dateAdded: "2022-01-26T22:12:30.454378+00:00",
            email: "someone@outlook.com",
            gender: "male",
            id: "bdf2ed64-bf70-450d-80ba-fc0c9a53965f",
            lastModifiedDate: "2022-01-26T22:12:30.4544629+00:00",
            name: "Welcome",
            role: "SUPER_ADMIN",
            status: "PENDING_VERRIFICATION",
            surname: "Sithole",
            username: "someone@outlook.com",
        }));
       
    }
}
