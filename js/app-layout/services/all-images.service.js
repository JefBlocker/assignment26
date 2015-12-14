let AllImagesService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/posters';

  this.getAllPosters = getAllPosters;
  this.addLike = addLike;

  function getAllPosters () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addLike (postObj) {
    postObj.likes = postObj.likes + 1;
    return $http.put(url + '/' + postObj.objectId, postObj, PARSE.CONFIG);
  }

};

AllImagesService.$inject = ['$http', 'PARSE'];

export default AllImagesService;