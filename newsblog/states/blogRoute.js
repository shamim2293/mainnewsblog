
(function(){


    angular.module('myapp').config(configNav);

configNav.$inject = ['$urlRouterProvider', '$stateProvider']; 

function configNav($urlRouterProvider, $stateProvider){

        $stateProvider.state('features', {
            url: '/features',
            templateUrl:'view/page/features.html',
            controller: 'blogArticaleClt',
            controllerAs: 'vm',
            resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/blog/blogartical.js']
                  });
              }]
          }

        });

        $stateProvider.state('buytheme', {
            url: '/buytheme',
            templateUrl: 'view/page/buy-them.html'
        });

        $stateProvider.state('entertainment', {
            url: '/entertainment',
            templateUrl: 'view/page/entertainment.html'
        }); 
        $stateProvider.state('politics', {
            url: '/politics',
            templateUrl: 'view/page/politics.html'
        });
        $stateProvider.state('fashion', {
            url: '/fashion',
            templateUrl: 'view/page/fashion.html'
        });
        $stateProvider.state('sports', {
            url: '/sports',
            templateUrl: 'view/page/sports.html'
        });
        $stateProvider.state('tech', {
            url: '/tech',
            templateUrl: 'view/page/tech.html'
        });
        $stateProvider.state('business', {
            url: '/business',
            templateUrl: 'view/page/business.html'
        }); 
        $stateProvider.state('shop', {
            url: '/shop',
            templateUrl: 'view/page/shop.html'
        });  


        //all product catagory route
         $stateProvider.state('allnews', {
            url: '/allnews',
            templateUrl: 'view/category-single/all-catagory.html',
            controller: 'blogArticaleClt',
            controllerAs: 'vm',
             resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/blog/blogartical.js']
                  });
              }]
          }

        });  


         //Entertainment catagory route
         $stateProvider.state('entertainmentCatagory', {
            url: '/entertainmentCatagory',
            templateUrl: 'view/category-single/emtertainment.html',
            controller: 'allEntertainmentCatagoryClt',
            controllerAs: 'vm',
             resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/category/allEntertainmentCatagoryClt.js']
                  });
              }]
          }

        }); 

        
         //Videos catagory route
         $stateProvider.state('videosCategory', {
            url: '/videosCategory',
            templateUrl: 'view/category-single/video.html',
            controller: 'allVideoCategoryClt',
            controllerAs: 'vm',
             resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/category/allVideoCatagoryClt.js']
                  });
              }]
          }

        }); 





        $urlRouterProvider.otherwise('/features');

}


angular.module('myapp').run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        event.preventDefault();
        console.log('toState')
        $state.go('error', null, { location: true, inherit: true, relative: $state.$current, notify: false });
    });
}]);



})()