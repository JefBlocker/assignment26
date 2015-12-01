let ImagesService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/images';

  this.getAllImages = getAllImages;
  this.addImage = addImage;
  this.like = like;

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

  function like (obj) {
    updateLikes(obj);
    return console.log(obj);
  }

  function updateLikes (obj) {
    obj.likes = obj.likes + 1;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  }

};

ImagesService.$inject = ['$http', 'PARSE'];

export default ImagesService;