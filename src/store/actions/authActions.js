import { BACKEND_BASE_URL } from '../../shared/Url'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR = 'ERROR';

const login = (tokenObject) => ({
    type: LOGIN,
    tokenObject
});

const error = (error) => ({
    type: ERROR,
    error
});

export const getToken = createAsyncThunk(
    BACKEND_BASE_URL + '/auth',
    async ({ username, password }, thunkAPI) => {
        try {
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(3000);
            //const data = await AuthService.login(username, password);
            var data = {
                expire: "8022-04-26T22:07:53.2112771Z",
                name: "Welcome Sithole",
                role: "SUPER_ADMIN",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2ZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoiVVNFUlNfQVBJIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxZGJiOTA0YS1jYjIzLTQzOTItOTdkYS0wNWI5NmZmNjYwMDgiLCJzdGF0dXMiOiJQRU5ESU5HX1ZFUlJJRklDQVRJT04iLCJjcmVhdGVkLWRhdGUiOiIxLzI2LzIwMjIgMTA6MDc6NTMgUE0gKzAwOjAwIiwidW5pdmVyc2l0eS1pZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOlvdXJkb21haW4uY29tIn0.xERAjGNtpGksNrJkCEnuNxQTVvgFpbnTjHlHBVQOY",
                userId: "1dbb904a-cb23-4392-97da-05b96ff66008"
            };
            thunkAPI.dispatch(login(data));
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

export const logout = () => ({
    type: LOGOUT
});