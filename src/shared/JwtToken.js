import { logout} from '../store/actions/authActions'
export function getToken(dispatch, state) {
	const tokenObject = state.authReducer.tokenObject;
/*	const date = new Date();
	const expireDate = new Date(tokenObject.expire);
	if(date >= expireDate){
		dispatch(logout());
	}
	*/
	return tokenObject.token;
}