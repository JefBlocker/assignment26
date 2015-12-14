import angular from 'angular';
import '../app-core/index';

import AddImageController from './controllers/add-image.controller';

import AddImageService from './services/add-image.service';

angular
  .module('app.images', ['app.core'])
  .controller('AddImageController', AddImageController)
  .service('AddImageService', AddImageService)
  ;