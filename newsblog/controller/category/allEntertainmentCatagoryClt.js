





(function(){ 


	angular.module('myapp')
    .controller('allEntertainmentCatagoryClt', blogArticale);

    blogArticale.$inject = ['$scope', 'blogArticaleLeftSide',  '$q'];

        
    function blogArticale($scope, blogArticaleLeftSide,  $q){ 
        // first controller dependence
         
            blogArticaleLeftSide.getAlbums().then(function(aside){
            $scope.aside = aside.data;
            $scope.limiTation = 12;
            $scope.categories = 'entertainment'
            //console.log($scope.users)
             });  

        
          
         


    }; 

 

})()







