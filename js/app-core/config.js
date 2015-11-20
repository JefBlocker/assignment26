let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })

    .state('root.home', {
      url: '/',

      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    // My Cars
    .state('root.cars', {
      url: '/cars',
      controller: 'ImagesController as vm',
      templateUrl: 'templates/app-images/images.tpl.html'
    })
    // Add Car
    .state('root.addImage', {
      url: '/images/add',
      controller: 'ImagesAddController as vm',
      templateUrl: 'templates/app-images/images-add.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
