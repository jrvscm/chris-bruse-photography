import { REACT_APP_CLOUDINARY_API_URL } from '../config'

export const getSliderImages = () => (dispatch) => {
	return fetch(`${REACT_APP_CLOUDINARY_API_URL}`, {
		method: 'GET'
	})
	.then(response => response.json())
	.then(json => console.log(json))
	.catch((ex) => console.log(`${ex}`))
}