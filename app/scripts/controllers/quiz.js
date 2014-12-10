'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function ($scope, $interval, $timeout) {

    //Keeps track of the score on quiz
  $scope.totalScore = 0;
  $scope.$on('score', function(event, data) {
    $scope.totalScore += data;
  });


    //Keeps track of the time remaining to take the quiz.
  // $scope.time = 10;
  //
  // $scope.start = function() {
  //   $interval(function(){
  //     $scope.time--;
  //     if ($scope.time === 0) {
  //       // alert("Time's up!");
  //
  //     }
  //   }, 1000)
  // }

  $scope.time = 10;

  $scope.start = function() {
    $scope.onTimeout = function() {
      if ($scope.time > 0) {
        $scope.time--;
        mytimeout = $timeout($scope.onTimeout,1000);
      } else {
        $scope.stop();
      }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stop = function() {
      $timeout.cancel(mytimeout);
    }

    $scope.reset = function() {
      $scope.time = 10;
    }
  }


  // function AlbumCtrl($scope,$timeout) {
  //   $scope.counter = 0;
  //   $scope.onTimeout = function(){
  //     $scope.counter++;
  //     mytimeout = $timeout($scope.onTimeout,1000);
  //   }
  //   var mytimeout = $timeout($scope.onTimeout,1000);
  //
  //   $scope.stop = function(){
  //     $timeout.cancel(mytimeout);
  //   }
  // }




  });
