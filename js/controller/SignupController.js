
app.controller('signupCtrl', function($scope,$window,$location) {
	$scope.hello = 'Hellow';

	$scope.post=function(){

	var user = new Parse.User();
	user.set("email",$scope.email);
	user.set("password",$scope.password);
	user.set('username',$scope.username);
    user.signUp(null, {
        success: function (user) {
        query = new Parse.Query(Parse.Role);
        query.equalTo ("name",$scope.selectbox);
        query.first({
         	success: function(object)
         	{
         		// console.log(JSON.stringify(object));
                // alert(JSON.stringify(object));
         		object.relation('users').add(user);
         		object.save();
         		$window.location.href="index.html#/dashboard";
         	}, error: function(err)
         	{
         		console.log('err is '+ err);
         	}

         });

        
           },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });


	} 
});