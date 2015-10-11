app.controller('customerCtrl', function($scope,$window,$location) {
$scope.hello="Customer Under Construction";
console.log(Parse.User.current());

$scope.post=function(){
var ticket = Parse.Object.extend('Ticket');

newticket= new ticket();

newticket.set('title',$scope.title);
newticket.set('description',$scope.description);
newticket.set('owner',Parse.User.current().id)

newticket.save({success:function(){
	//$scope.getdata();
	console.log('saved');

}, error:function(error){

console.log(error);

}
});

}




});