import React from 'react';

import { Provider } from 'react-redux';

import { store } from '../store';

import {ConnectedDashboard} from './Dashboard';

export const Main = ()=>{
return(
	<Provider store = {store}>
		<div>
			<ConnectedDashboard/>
		</div>
	</Provider>
	);
}