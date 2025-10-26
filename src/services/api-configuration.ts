/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
// Import the environment object from the appropriate file
import { environment } from '../environments/environment';
import { ENVIRONMENT_TYPE } from '../environments/types';

// Access the properties as needed
if (environment.type === ENVIRONMENT_TYPE.PRODUCTION) {
	console.log('Running in production mode');
	console.log('API URL:', environment.apiUrl);
} else if (environment.type === ENVIRONMENT_TYPE.STAGING) {
	console.log('Running in staging mode');
	console.log('API URL:', environment.apiUrl);
}else if (environment.type === ENVIRONMENT_TYPE.QA) {
	console.log('Running in qa mode');
	console.log('API URL:', environment.apiUrl);
} else if (environment.type === ENVIRONMENT_TYPE.DEVELOPMENT) {
	console.log('Running in development mode');
	console.log('API URL:', environment.apiUrl);
}

/**
 * Global configuration
 */
@Injectable({
	providedIn: 'root',
})
export class ApiConfiguration {
	rootUrl: string = environment.apiUrl;
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
	rootUrl?: string;
}