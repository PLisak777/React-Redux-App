import React from 'react';
import { RecipeCard } from './components/RecipeCard';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <RecipeCard 
      meals={props.meals}
      strMeal={props.strMeal}
      strMealThumb={props.strMealThumb}
      strInstructions={props.strInstructions} 
      />
    </div>
  );
}

export default App;
