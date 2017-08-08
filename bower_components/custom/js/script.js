// create module
var mainApp = angular.module("mainApp", ["ngRoute", "ngAnimate"]);

// configure routes
mainApp.config(function($routeProvider) {
  $routeProvider

    // route for home page
    .when("/", {
      templateUrl: 'pages/homepage.html',
      controller: 'mainController'
    })

    .when("/404", {
      templateUrl: "pages/404.html",
      controller: "404Controller"
    })

    .otherwise({
      redirectTo: '/404'
    });
})

// create controller and inject Angular's $scope
mainApp.controller("mainController", function($scope, $sce, $location, $anchorScroll) {
  // create a message to desplay in our view

  $scope.aboutMe = "My name is Bart van Straaten, I am situated in The Netherlands. " +
    "Currently I am studying HBO-ICT at the Hogeschool Utrecht. " +
    "I just finished the first year of Software And Information Engineering which is the branch I have chosen to develop myself in. " +
    "Things I used include but are not limited to:";

  $scope.work1 = "A platform build to keep track of your investments and generate a clear and easy to use visual interface. It relies on the data the user provides to generate graphs." ;
  $scope.work2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non felis vitae augue aliquam pharetra sit amet non nulla. Suspendisse aliquam turpis id laoreet egestas. Etiam feugiat nibh quis ligula vehicula laoreet.";
});

mainApp.controller("404Controller", function($scope) {
  $scope.message = "Sorry this page does not exist."
  $scope.title = "Boekhouding | 404";
})
