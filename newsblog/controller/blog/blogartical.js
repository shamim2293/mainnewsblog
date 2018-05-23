(function(){ 


	angular.module('myapp')
    .controller('blogArticaleClt', blogArticale);

    blogArticale.$inject = ['$scope', 'blogArticaleLeftSide', 'blogFeaturesMiddelPart', '$q'];

        
    function blogArticale($scope, blogArticaleLeftSide, blogFeaturesMiddelPart, $q){ 
        // first controller dependence
         
            blogArticaleLeftSide.getAlbums().then(function(aside){
            $scope.aside = aside.data;
            $scope.limiTation = 4 
            //console.log($scope.users)
             }); 

         
          
         //console.log($scope.users)

         // second controller dependence
        
             blogFeaturesMiddelPart.getFatureMiddelData().then(function(MidArtical){
                $scope.MidArtical = MidArtical.data;
                $scope.limited = 2
                console.log($scope.MidArtical)
         }) 
        

         $scope.tags = 'tags';
         


    }; 

 

})()

