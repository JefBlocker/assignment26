let AddImageController = function(AddImageService, $state) {
  
  let vm = this;

  vm.addPoster = addPoster;

  function addPoster (poster) {
    AddImageService.addPoster(poster).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  }

};

AddImageController.$inject = ['AddImageService', '$state'];

export default AddImageController;