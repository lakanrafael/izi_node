var app = angular.module('onload',['ngCookies','angular-md5','ngSanitize','ngAnimate']);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[').endSymbol(']}');
});
