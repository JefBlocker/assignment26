let ImagesController = function(ImagesService) {
  
  let vm = this;

  vm.images = [];
  vm.clicked = clicked;
  vm.count = 0;
  vm.message = "";

  vm.incrementByOne = function() {
      vm.count++;
      vm.message = (vm.count === 1) ? "We feel love!" : "I heart flying saucers!";
    };

  activate();

  function activate () {
    ImagesService.getAllImages().then( (res) => {
      vm.images = res.data.results;
    });
  }

  function clicked (image) {
    console.log('clicked', image.title);
  }
  
};

ImagesController.$inject = ['ImagesService'];

export default ImagesController;