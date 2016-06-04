var app = angular.module('floydNews', ['ui.router']);

app.controller('MainCtrl', ['$scope', 'posts',
function($scope, posts  ){
  $scope.test = 'Hello world!'; 
 
$scope.posts = [//#1
  {title : 'post 1', upvotes : 5},
  {title : 'post 2', upvotes : 2},
  {title : 'post 3', upvotes : 15},
  {title : 'post 4', upvotes : 9},
  {title : 'post 5', upvotes : 4}    
];    
$scope.addPost = function() {//#2
    //#4
    if(!$scope.title || $scope.title === '') {return;}
    $scope.posts.push({title: $scope.title,
                       link: $scope.link,
                       upvotes: 0
    });
    $scope.posts.posts.posts;  
    $scope.title ='';
    $scope.link ="";
    
};   
  
$scope.incrementUpvotes = function (p) {
p.upvotes += 1;
};
 }]);
 app.factory('posts',[function(){
     var o = {
         posts: []
     };
     return o;
 }]); 
app.config([
  '$stateProvider',
  '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
     
        $stateProvider
         .state('home', {
          url: '/home',
          templateurl: '/home.html',
          controller: 'MainCtrl'
        });
        $urlRouterProvider.otherwise('home');
    }//} remove this extr bracket???
    
]);     
