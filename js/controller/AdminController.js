app.controller('adminCtrl', function($scope,$window,$location) {
$scope.hello="Under Construction";


$scope.getdata=function()
{



	var tickets = Parse.Object.extend("Ticket");
	var query = new Parse.Query(tickets);

	$scope.tickets = [];

	query.find({
	  success: function(results) {
	    // alert("Successfully retrieved " + results.length + " tickets.");
	    // console.log(JSON.stringify(results));

	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) {
	    	console.log(results[i]);
	      var object = results[i];
	      $scope.tickets.push({"title":results[i].get('title'),"id":results[i].id});
	      // alert(object.id + ' - ' + object.get('title'));
	    }

	    console.log($scope.tickets);
	    $scope.$apply();
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});


	var dev = 'developer';

	query = new Parse.Query(Parse.Role);
    query.equalTo ("name",dev);

	query.find({
		success: function(results){
			console.log(JSON.parse(JSON.stringify(results)));
			console.log(Parse.Role.get('users'));
			
		}
	})

}


$scope.assign=function(index)
{

console.log(index);

}


});