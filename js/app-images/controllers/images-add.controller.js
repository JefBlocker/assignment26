let ImagesAddController = function(ImagesService) {
  
  let vm = this;

  vm.addImage = addImage;

  function addImage (imgageObj) {
    ImagesService.addImage(imageObj).then( (res) => {
      console.log(res);
    });
  }

};

ImagesAddController.$inject = ['ImagesService'];

export default ImagesAddController;