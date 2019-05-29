import Image from "../../models/image.js";

// @ts-ignore
const _imageApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/images",
	timeout: 3000
});
let _state = {
	image: {}
	
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	
	get image() {
		return _state.image
	}

	getImage() {
		_imageApi.get()
		.then(res => {
			let data = new Image(res.data)
			_setState('image', data)
		})
		.catch(err => {
			console.error(err)
		})
	}

}
