	
var app = angular.module('app', ['ngRoute']);

app.run(function(){
Parse.initialize("f6LaqjZRpx2eagcGeZEMpW2CQ2GxPE1CXZayVWhT", "180uVxPqTu0dP5Sh28QAqqnMAsRMGNEsfy88d3BU");


})
.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/dashboard',{templateUrl: 'view/dashboard.html',controller: 'dashboardCtrl'}).
		when('/admin',{templateUrl: 'view/admin.html',controller: 'adminCtrl'}).
		when('/developer',{templateUrl: 'view/developer.html',controller: 'developerCtrl'}).
		when('/customer',{templateUrl: 'view/customer.html',controller: 'customerCtrl'}).
		otherwise({ redirectTo: '/dashboard' });
});



