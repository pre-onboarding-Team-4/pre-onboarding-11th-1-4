import axios from 'axios';
import { toast } from 'react-toastify';

export const baseInstance = axios.create({
	baseURL: 'https://www.pre-onboarding-selection-task.shop/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const authInstance = axios.create({
	baseURL: 'https://www.pre-onboarding-selection-task.shop/',
	headers: {
		Authorization: 'Bearer ' + localStorage.accessToken,
		'Content-Type': 'application/json',
	},
});

baseInstance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		toast.error('응답중 에러가 발생했습니다');
		return Promise.reject(error);
	}
);

baseInstance.interceptors.response.use(
	function (response) {
		return response;
	},

	function (error) {
		toast.error('응답중 에러가 발생했습니다');
		return Promise.reject(error);
	}
);

authInstance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		toast.error('응답중 에러가 발생했습니다');
		return Promise.reject(error);
	}
);

authInstance.interceptors.response.use(
	function (response) {
		return response;
	},

	function (error) {
		toast.error('응답중 에러가 발생했습니다');
		return Promise.reject(error);
	}
);
