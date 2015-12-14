let posterImage = function(AllImagesService, $timeout) {
  
  return {
    restrict: 'AE',
    scope: {
      poster: '=poster'
    },
    template: `
      <div class="panel">
        <h5>{{ poster.title }}</h5>
        <img ng-src="{{ poster.poster }}">
        <span class="hidden"><i class="fa fa-heart"></i></span>
        <p class="likes">Likes: {{ poster.likes }} </p>
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function () {
        console.log('clicked');

        element.find('span').removeClass('invisible').addClass('visible');
        $timeout(function() {

          element.find('span').removeClass('visible').addClass('invisible');
        }, 1000);

        AllImagesService.addLike(scope.poster).then( (res) => {
          console.log(res);
        });
      });
    }
  };

};

posterImage.$inject = ['AllImagesService', '$timeout'];

export default posterImage;