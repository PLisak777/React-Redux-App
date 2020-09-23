import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';
import { RecipeCard } from './components/RecipeCard';

import './App.css';

function App(props) {
  useEffect(() => {
		props.fetchData();
	}, []);

  return (
    <div className="App">
      <RecipeCard 
      />
    </div>
  );
}

export default connect(null, { fetchData })(App);
