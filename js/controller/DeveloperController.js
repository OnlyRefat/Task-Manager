app.controller('developerCtrl', function($scope,$window,$location) {
$scope.hello="Dev Under Construction";
$scope.ticket=[];



$scope.getdata=function()
{

	var ticket = Parse.Object.extend('Ticket');

    var query = new Parse.Query(ticket);
    query.equalTo ("assignee",Parse.User.current().id);
    query.find({success:function(result){

    	for (var i = 0; i < result.length; i++) {
          var object = result[i];
          $scope.ticket.push({"title":result[i].get('title'),"description":result[i].get('description')});
        }
        $scope.$apply();
        
    },
    error:function(err)
    {
    	console.log(err);
    }


});

}


});