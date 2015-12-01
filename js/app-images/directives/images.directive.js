let imageItem = function($state, ImagesService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '='
    },
    template: `
      <div class="panel">
        <h5>{{ image.title }}</h5>
        <img ng-src="{{ image.image }}">
        <p>Likes: {{ image.likes }}</p>
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function () {
        element.addClass('heart');
        ImagesService.like(scope.image);
      });
    }
  };

};

imageItem.$inject = ['$state', 'ImagesService'];

export default imageItem;