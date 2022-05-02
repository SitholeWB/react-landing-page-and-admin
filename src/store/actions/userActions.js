import { BACKEND_BASE_URL } from '../../shared/Url'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const REGISTER = 'REGISTER';
export const ERROR = 'ERROR';

const register = (userObject) => ({
    type: REGISTER,
    userObject
});

const error = (error) => ({
    type: ERROR,
    error
});

export const registerUser = createAsyncThunk(
    BACKEND_BASE_URL + '/users',
    async ({ username, password }, thunkAPI) => {
        try {
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(3000);
            //const data = await AuthService.login(username, password);
            var data = {
                about: null,
                dateAdded: "2022-01-26T22:12:30.454378+00:00",
                email: "someone@outlook.com",
                gender: "male",
                id: "bdf2ed64-bf70-450d-80ba-fc0c9a53965f",
                lastModifiedDate: "2022-01-26T22:12:30.4544629+00:00",
                name: "Welcome",
                role: "ADMIN",
                status: "PENDING_VERRIFICATION",
                surname: "Sithole",
                username: "someone@outlook.com",
            };
            thunkAPI.dispatch(register(data));
            return data;
        } catch (err) {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString();
            thunkAPI.dispatch(error(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

