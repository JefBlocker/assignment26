let jefImage = function($state, ImagesService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '='
    },
    template: `
      <div class="panel" ng-click="vm.dblclicked(image)">
        <h5>{{ image.title }}</h5>
        <p>{{ image.image }}</p>
      </div>
    `,
    controller: 'ImagesController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        // Add heart hover and like increment code here
      });
    }
  };

};

jefImage.$inject = ['$state', 'ImagesService'];

export default jefImage;