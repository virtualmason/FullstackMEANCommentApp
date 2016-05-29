var app = angular.module('floydNews', []);

app.controller('MainCtrl', [
'$scope', function($scope){
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
    $scope.title ='';
    $scope.link ="";
    
};       
$scope.incrementUpvotes = function (p) {
p.upvotes += 1;
}
 
    
}]);