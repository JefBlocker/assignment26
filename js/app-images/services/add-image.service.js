let AddImageService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/posters';

  this.addPoster = addPoster;

  let Poster = function (posterObj) {
    this.poster = posterObj.poster;
    this.title = posterObj.title;
  };

  function addPoster (posterObj) {
    let i = new Poster(posterObj);
    return $http.post(url, i, PARSE.CONFIG);
  }

};

AddImageService.$inject = ['$http', 'PARSE'];

export default AddImageService;