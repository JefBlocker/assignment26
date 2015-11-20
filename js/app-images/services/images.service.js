let ImagesService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/car';

  this.getAllImages = getAllImages;
  this.addImage = addImage;

  function Title (imageObj) {
    this.title = imageObj.title;
  }

  function Image (imageObj) {
    this.image = imageObj.image;
  }

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (imageObj) {
    let img = new Image(imageObj);
    return $http.post(url, img, PARSE.CONFIG);
  }

};

CarService.$inject = ['$http', 'PARSE'];

export default ImagesService;