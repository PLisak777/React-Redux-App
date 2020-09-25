import {
	FETCH_DATA_SUCCESS,
	FETCH_DATA_START,
	FETCH_DATA_FAIL,
} from '../actions/actions';

const initialState = {
	mealState: {
	strMeal: '',
	strMealThumb: '',
	strInstructions: '',
},
	is_loading_data: false,
	error: '',
};

export const mealReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				is_loading_data: true,
			};
		case FETCH_DATA_SUCCESS:
			console.log('action return', action.payload);
			console.log('action payload', action.payload.strMeal)
			return {
				...state,
				is_loading_data: false,
				mealState: action.payload,
				// strMeal: action.payload.meals.strMeal,
				// strMealThumb: action.payload.meals.strMealThumb,
				// strInstructions: action.payload.meals.strInstructions,
				error: '',
			};
		case FETCH_DATA_FAIL:
			return {
				...state,
				is_loading_data: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
