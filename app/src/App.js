import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';
import { RecipeCard } from './components/RecipeCard';
import { store } from './index';

import './App.css';

function App(props) {
  useEffect(() => {
		props.fetchData();
	}, []);

  return (
    <div className="App">
      <RecipeCard 
      store={store}
      state={props.state}
      mealReducer={props.mealReducer}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
	console.log('state props', state)
	return {
		strMeal: state.strMeal,
		strMealThumb: state.strMealThumb,
		strInstructions: state.strInstructions,
		is_loading_data: state.is_loading_data,
		error: state.error,
	};
};

console.log('map state', mapStateToProps)

export default connect(mapStateToProps, { fetchData })(App);
