import ImageService from "./image-service.js";

//Private
const _imageService = new ImageService()


function drawImage(){
        document.getElementById('bg-image').setAttribute('style',`background-image: url(${_imageService.image.large_url})`)      
}


//Public
export default class ImageController{
    constructor(){
        _imageService.addSubscriber('image', drawImage)
        _imageService.getImage()
    }
}

