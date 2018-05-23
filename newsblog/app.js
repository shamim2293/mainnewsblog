	

	// create the module and name it scotchApp
	var app = angular.module('myapp'); 


 


	// home controller

		app.controller('homeControl', ['$scope', function($scope){
			$scope.a = 10,
			$scope.b = 20,
			$scope.bio = 'tell some idea about angularjs',
			$scope.sum = function(){
				 parseInt($scope.a) + parseInt($scope.b);
				}
		}]);
  


