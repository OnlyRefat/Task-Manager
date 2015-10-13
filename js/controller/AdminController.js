app.controller('adminCtrl', function($scope,$window,$location) {
$scope.hello="Under Construction";

$scope.getdata=function()
{
	var tickets = Parse.Object.extend("Ticket");
	var query = new Parse.Query(tickets);

		$scope.tickets = [];
		$scope.developers=[];
		query.find({
		  success: function(results) {
		    
		    for (var i = 0; i < results.length; i++) {
		      var object = results[i];
		      $scope.tickets.push({"title":results[i].get('title'),"id":results[i].id});
		    }

		    $scope.$apply();
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});


		$scope.roleUser = [];

		query = (new Parse.Query(Parse.Role));
		query.equalTo("name", "developer");
		query.first({ success: function(role) {
		
			role.relation('users').query().find({success: function(users) {

		  	for (var i = 0; i < users.length; i++) {
	    	
			  	query = (new Parse.Query(Parse.User));
					query.equalTo("objectId", users[i].id);
					query.find({
							success: function(res){
							var userNamesInDev = JSON.parse((JSON.stringify(res)));
							$scope.roleUser.push({"id":userNamesInDev[0].objectId, "name":userNamesInDev[0].username});
							$scope.$apply();
						}
					})
	  		}  
			},
			  error: function(error) {
		  	  alert("Error: " + error.code + " " + error.message);
		 	 	}
			})
		}})

}

	$scope.assign = function( developerId , ticketid )
	{

		var tickets = Parse.Object.extend("Ticket");
		var query = new Parse.Query(tickets);

    query.equalTo("objectId", ticketid);
    query.find({
      success: function(results) {

        $.each(results, function(i,result){

            result.save(null, {
              success: function(result) {
                result.set("assignee", developerId);
                result.save();
              }
            });

        });  

      }
    });


	}

	$scope.deleteTicket = function( ticketid ) {

	var DeleteTicket = Parse.Object.extend("Ticket");
	var query = new Parse.Query(DeleteTicket);
	query.get(ticketid, {
	  success: function(myObj) {
	    myObj.destroy({});
	  },
	  error: function(object, error) {
	  	console.log(error);
	  }
	});

	}


});