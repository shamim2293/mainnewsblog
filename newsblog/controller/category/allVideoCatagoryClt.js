





(function(){ 


	angular.module('myapp')
    .controller('allVideoCategoryClt', blogArticale);

    blogArticale.$inject = ['$scope', 'blogArticaleLeftSide',  '$q'];

        
    function blogArticale($scope, blogArticaleLeftSide,  $q){ 
        // first controller dependence
         
            blogArticaleLeftSide.getAlbums().then(function(aside){
            $scope.aside = aside.data;
            $scope.limiTation = 12;
            $scope.categories = 'videos'
            //console.log($scope.users)
             });  

        
          
         


    }; 

 

})()







