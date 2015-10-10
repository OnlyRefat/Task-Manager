
app.controller('signupCtrl', function($scope,$window,$location) {
	$scope.hello = 'Hellow';

	$scope.post=function(){

	console.log($scope.selectbox);
		/*var user = new Parse.User();
		user.set("email",$scope.email);
		user.set("password",$scope.password);
		user.signUp(null,{success:function(user){
			console.log(user);

		},error:function(error){
			console.log('error is'+error);

		}})*/

	var user = new Parse.User();
		user.set("email",$scope.email);
		user.set("password",$scope.password);
		user.set('username',$scope.username);
     user.signUp(null, {
        success: function (user) {

        	// var roleACL = new Parse.ACL();
         //    roleACL.setPublicReadAccess(true);
         //    roleACL.setPublicWriteAccess(true); 
         //    var role = new Parse.Role($scope.selectbox, roleACL);
         //    role.save();

         query = new Parse.Query(Parse.Role);
         query.equalTo ("name",$scope.selectbox);
         query.first({
         	success: function(object)
         	{
         		alert(JSON.stringify(object));
         		console.log(JSON.stringify(object));
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