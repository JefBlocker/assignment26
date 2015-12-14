let HomeController = function(AllImagesService) {

  let vm = this;
  
  vm.posters = [];

  getPosters();

  function getPosters() {
    AllImagesService.getAllPosters().then( (res) => {
      vm.posters = res.data.results;
    });
  }

};

HomeController.$inject = ['AllImagesService'];

export default HomeController;