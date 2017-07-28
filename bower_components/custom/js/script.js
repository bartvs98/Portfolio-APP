// create module
var mainApp = angular.module("mainApp", ["ngRoute", "ngAnimate"]);

// configure routes
mainApp.config(function($routeProvider) {
  $routeProvider

    // route for home page
    .when("/", {
      templateUrl : 'pages/parallax.html',
      controller  : 'mainController'
    })

    .when("/404", {
      templateUrl : "pages/404.html",
      controller  : "404Controller"
    })

    .otherwise({ redirectTo: '/404' });
})

// create controller and inject Angular's $scope
mainApp.controller("mainController", function($scope, $sce, $location, $anchorScroll) {
  // create a message to desplay in our view
  $scope.caption = "PRESENT YOURSELF IN AN UNIQUE WAY";

  $scope.aboutMe = "My name is Bart van Straaten, I am situated in The Netherlands. " +
                   "Currently I am studying HBO-ICT at the Hogeschool Utrecht. " +
                   "I just finished the first year of Software And Information Engineering which is the branch I have chosen to develop myself in. " +
                   "This includes but is not limited to:";
});

mainApp.controller("404Controller", function($scope) {
  $scope.message = "Sorry this page does not exist."
  $scope.title = "Boekhouding | 404";
})
