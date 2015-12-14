import angular from 'angular';
import '../app-core/index';

import HomeController from './controllers/home.controller';

import posterImage from './directives/image.directive';

import AllImagesService from './services/all-images.service';

angular
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  .directive('posterImage', posterImage)
  .service('AllImagesService', AllImagesService)
;