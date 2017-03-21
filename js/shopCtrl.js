angular.module('assessment').controller('shopCtrl', function ($scope, shopService) {
  $scope.test = 'Hello, I am a working test'
  shopService.getProducts().then(function (data) {
    $scope.products = data
  })
})
