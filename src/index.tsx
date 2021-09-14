import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App/App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { MenuProvider } from 'MenuContext';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
		<Router>
			<MenuProvider>
				<App />
			</MenuProvider>
		</Router>
    </ApolloProvider>
  , document.getElementById('main-body')
);
