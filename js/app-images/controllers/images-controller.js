let ImagesController = function(ImagesService) {
  
  let vm = this;

  vm.images = [];
  vm.dblclicked = dblclicked;

  activate();

  function activate () {
    ImagesService.getAllImages().then( (res) => {
      vm.images = res.data.results;
    });
  }

  function dblclicked (image) {
    console.log('dblclicked', image.title);
  }
  
};

ImagesController.$inject = ['ImagesService'];

export default ImagesController;