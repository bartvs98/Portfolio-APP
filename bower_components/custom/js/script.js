// create module
var mainApp = angular.module("mainApp", ["ngRoute"]);

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
mainApp.controller("mainController", function($scope) {
  // create a message to desplay in our view

  $scope.aboutMe = "My name is Bart van Straaten, I am situated in The Netherlands. " +
                   "Currently I am studying HBO-ICT at the Hogeschool Utrecht. " +
                   "I just finished the first year of Software And Information Engineering which is the branch I have chosen to develop myself in. " +
                   "Things I used include but are not limited to:";

  $scope.work1 = "A platform build to keep track of your investments from different banks all in one place. By entering the stock prices from your shares along side with the date. " +
                 "The application will use this data to generate graphs for you which makes it posible to checkup on your shares with the blink of an eye. " +
                 "The only thing you have to do is provide the correct data." ;

  $scope.work2 = "Summary";
});

mainApp.controller("404Controller", function($scope) {
  $scope.message = "Sorry this page does not exist."
  $scope.title = "Boekhouding | 404";
})
