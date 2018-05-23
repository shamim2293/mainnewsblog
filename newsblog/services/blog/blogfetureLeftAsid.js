

(function(){

	console.log('service inject from outside....');




	// services      
angular.module('myapp').factory('blogArticaleLeftSide',  function($http, $q){
    
         function getAlbums(){
            var def = $q.defer(); 
             $http.get('model/blog/blogFeaturesAside.json')
            .then(function(data){                
                def.resolve(data);
            }); 
           // console.log(def)
            return def.promise; 
         }
        //console.log(getAlbums())
          return {
            getAlbums: getAlbums
          };
		}); 

		// service-2 
		angular.module('myapp').factory('blogFeaturesMiddelPart', function($http, $q){  
		    function getFatureMiddelData(){
		           var defared = $q.defer();
		        $http.get('model/blog/blogFeaturesMiddelpart.json')
		                .then(function(data){
		                    defared.resolve(data);
		        });
		            return defared.promise 
		    }
		    console.log(getFatureMiddelData());

		    return{
		        getFatureMiddelData: getFatureMiddelData
		    } 
		})
   
  
})()



