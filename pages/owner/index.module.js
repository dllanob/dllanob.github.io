(function() {
  'use strict';

  var app = angular
    .module('ownerService', ['ui.router', 'ngMap'])
    .config(config);


  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/index.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('drivers', {
        url: '/drivers',
        templateUrl: 'drivers/',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('driver-info', {
        url: '/driver/info',
        templateUrl: 'driver-info/index.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/login');
  }

  app.controller('MainController', function($scope, $http, NgMap){

    var marker;
    var vm = this;

    NgMap.getMap().then(function(map) {

      var notification = document.getElementById("notification");

      if (!navigator.geolocation){
        notification.innerHTML = "<p class='message'>La Geolocalización no está soportada por su navegador.</p>";
        return;
      }

      function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitud: "+latitude+" Longitud:"+longitude)

        notification.innerHTML = ' ';
        
      };

      function error() {
        notification.innerHTML = "<p class='message'>No se puede obtener su ubicación.</p>";
        alert("No se puede obtener su ubicación. Revisa los permisos del navegador.");
      };

      notification.innerHTML = "<div class='preloader-wrapper small active'><div class='spinner-layer spinner-yellow-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>";
      navigator.geolocation.getCurrentPosition(success, error);

    });

    //retornar a save place

    // var vm = this;
    // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    // NgMap.getMap().then(function(map) {
    //   vm.map = map;
    // });
    // vm.click = function() {
    //   vm.map.setCenter(chicago);
    // };
    // 
    
    // NgMap.getMap().then(function(map) {
    //   vm.map = map;
    //   marker = map.markers[0];
    // });
    
    // vm.centerChanged = function(event) {
    //   $timeout(function() {
    //     vm.map.panTo(marker.getPosition());
    //   }, 3000);
    // }
    
    // vm.click = function(event) {
    //   vm.map.setZoom(8);
    //   vm.map.setCenter(marker.getPosition());
    // }
 
  });

})();