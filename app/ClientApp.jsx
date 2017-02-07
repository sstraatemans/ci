import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import {IntlProvider} from 'react-intl';
import App from './App';


const locale = 'en';

render(<BrowserRouter><IntlProvider locale={locale}><App /></IntlProvider></BrowserRouter>, document.getElementById('app'));
