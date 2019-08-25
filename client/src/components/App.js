import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import TestSubscription from './TestSubscription';


function App() {
	const { loading, error, data } = useQuery(gql`
		query GetTest {
			test
		}
	`);
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
				<p>{loading ? 'Loading...' : JSON.stringify(data)}</p>
				<TestSubscription />
      </header>
    </div>
  );
}

export default App;
