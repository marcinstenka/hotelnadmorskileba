import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import './index.css';
import App from './App';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['pl', 'en', 'de'],
		fallbackLng: 'pl',
		detection: {
			order: ['cookie', 'htmlTag', 'path'],
			caches: ['cookie'],
		},
		backend: {
			loadPath: 'assets/locales/{{lng}}/translation.json',
		},
		react: {
			useSuspense: false,
		},
	});

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
