

(function(){ 

 

	var blogclt = angular.module('myapp');

		// banner
		blogclt.controller('bannerClt', ['$scope', function($scope){
			$scope.banner = {
				name: 'bannerpart',
				url: 'view/common-part/banner/banner.html'
			}
		}])
		// logo 
		blogclt.controller('logoClt', ['$scope', function($scope){
				$scope.logo ={
					name: 'logopart',
					url: 'view/common-part/logo/logo.html'
				}
		}]);

		// header 

		blogclt.controller('headerClt',  ['$scope', function($scope){
			$scope.header = {
				name: 'header',
				url: 'view/common-part/header/header.html'
			}
		}]); 

		// footer controller

	blogclt.controller('footerClt', ['$scope', function($scope){
		$scope.footer = {
			name: 'footer',
			url: 'view/common-part/footer/footer.html'
		}
	}]);

	// footer copyright 
	blogclt.controller('copyrightClt', ['$scope', function($scope){
		$scope.copyright = {
			name: 'copyright',
			url: "view/common-part/copyright/copyright.html"
		}
	}])
	// catagory controller
	blogclt.controller('catagoryEntertainment', ['$scope', function($scope){
		$scope.entertainment = {
			name: 'entertainment',
			url: 'view/category/entertainment.html'
		}
	}]);

	// catagory video gelary
	blogclt.controller('catagoryVideoClt', ['$scope', function($scope){
		$scope.videos = {
			name: 'catagoryVideoGallary',
			url: 'view/category/videos.html'
		}
	}]);

	// catagory business 
	blogclt.controller("catagoryBusinessClt", ['$scope', function($scope){
			$scope.business = {
				name: 'catagoryBusiness',
				url: 'view/category/bussiness.html'
			}
	}]); 

})()



