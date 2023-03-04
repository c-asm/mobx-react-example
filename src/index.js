// React base libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

// Global mobx store
import { Provider } from "mobx-react";
import ArticleStore from "./data/ArticleStore.ts";
const GlobalStores = {ArticleStore, };

// Main React DOM function
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// I am not using any routing here, because the purpose 
	// of the project is just to demonstrate Mobx integration with React
	<Provider rootStore={GlobalStores}>
		<App />
	</Provider>
);