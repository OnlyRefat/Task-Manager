app.controller('adminCtrl', function($scope,$window,$location) {
$scope.hello="Under Construction";


$scope.getdata=function()
{



	var tickets = Parse.Object.extend("Ticket");
	var query = new Parse.Query(tickets);

	$scope.tickets = [];

	query.find({
	  success: function(results) {
	    
	    for (var i = 0; i < results.length; i++) {
	    	// console.log(results[i]);
	      var object = results[i];
	      $scope.tickets.push({"title":results[i].get('title'),"id":results[i].id});
	    }

	    // console.log($scope.tickets);
	    $scope.$apply();
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});


	// var dev = 'developer';

	// query = new Parse.Query(Parse.Role);
 //    query.equalTo ("name",dev);

	// query.find({
	// 	success: function(results){
	// 		// console.log(JSON.parse(JSON.stringify(results)));
	// 		// console.log(Parse.Role.get('users'));
			
	// 	}
	// })

		$scope.roleUser = [];

		query = (new Parse.Query(Parse.Role));
		query.equalTo("name", "developer");
		query.first({ success: function(role) {
		  role.relation('users').query().find({success: function(users) {
		  	// console.log(users);
		  	
		  	
		  	// $scope.roleUser.push({"id": users.id});
		  	for (var i = 0; i < users.length; i++) {
	    	
		  	query = (new Parse.Query(Parse.User));
			query.equalTo("objectId", users[i].id);
			query.find({
				success: function(res){
					var userNamesInDev = JSON.parse((JSON.stringify(res)));
					$scope.roleUser.push(userNamesInDev[0].username);
					// $scope.$apply();
				}
			})
		  	// console.log(users[i].id);
	    }
		  	
		  },
		  	

		  	error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
		})
	}})

}


$scope.assign=function(index)
{

console.log(index);

}


});