
app.controller('loginCtrl', function($scope,$window,$location) {
	$scope.hello = 'Hellow';
	$scope.signup=function()
	{

        	$window.location.href="signup.html";

	}
	$scope.post=function(){


Parse.User.logIn($scope.username, $scope.password, {
        // If the username and password matches
        success: function(user) {

        	query = new Parse.Query(Parse.Role);
         query.equalTo ("users",Parse.User.current());
         query.first().then(function(object){
         	//alert(object);
         	var profile=JSON.parse(JSON.stringify(object));
         	 alert(profile);

         	alert(profile.name);
         	$window.location.href="index.html";
         });

        	

	        },
        // If there is an error
        error: function(user, error) {
            console.log(error);
        }
    });


	} 
});