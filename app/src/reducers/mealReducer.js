import {
	FETCH_DATA_SUCCESS,
	FETCH_DATA_START,
	FETCH_DATA_FAIL,
} from '../actions/actions';

const initialState = {
	meals: [{
		strMeal: '',
		strMealThumb: '',
		strInstructions: ''
	}],
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
			return {
				...state,
				is_loading_data: false,
				meals: action.payload,
				// strMeal: action.payload,
				// strMealThumb: action.payload,
				// strInstructions: action.payload,
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
