
app.controller('dashboardCtrl', function($scope,$window,$location) {
	$scope.sample=[];

	
   $scope.getdata=function()
   {
   	if(Parse.User.current()==null)
	$window.location.href="login.html";

   }




	$scope.logout=function(){
		console.log('clickded');
		Parse.User.logOut();

		if(Parse.User.current()==null)
			$window.location.href="login.html";

	};



});