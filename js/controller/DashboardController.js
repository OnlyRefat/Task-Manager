
app.controller('dashboardCtrl', function($scope,$window,$location) {
	$scope.sample=[];





	$scope.logout=function(){
		Parse.User.logOut();
		if(Parse.User.current()==null)
			$window.location.href="login.html";

	};



});