import {store} from './store';

import React from 'react';

import ReactDom from 'react-dom';

import { Main } from './components/Main';
// import { Dashboard } from './components/Dashboard';

ReactDom.render(
		<Main/>,
		document.getElementById('app')
	);