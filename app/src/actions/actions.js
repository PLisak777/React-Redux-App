import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const fetchData = () => (dispatch) => {
	dispatch({ type: FETCH_DATA_START });

	setTimeout(() => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/random.php?api_key=1')
			.then((res) => {
				console.log('pl: actions.js: fetchData: axios.then: res: ', res);
				dispatch({
					type: FETCH_DATA_SUCCESS,
					payload: res.data.meals[0]
				});
			})
			.catch((err) => {
				console.error('fail', err.message);
				dispatch({
					type: FETCH_DATA_FAIL,
					payload: `error getting data, ${err.message}`,
				});
			});
	}, 2000);
};
