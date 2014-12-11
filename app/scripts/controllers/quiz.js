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

  $scope.options = {
    choices: [{},{},{}]
  };

  $scope.addOption = function() {
    $scope.options.choices.push({});
  };

  $scope.removeOption = function() {
    var index = $scope.options.choices.indexOf(this.option);
    $scope.options.choices.splice(index, 1);
  }


  $scope.addQuestion = function() {

    var newQuestion = {},
    optionArray = [];

    newQuestion.q = this.txtNewQuestion;

    // optionArray.push({'value': this.txtOption1 });
    // optionArray.push({'value': this.txtOption2 });
    // optionArray.push({'value': this.txtOption3 });
    // optionArray.push({'value': this.txtOption4 });
    newQuestion.options = optionArray;
    newQuestion.answer = this.radioInput;
    newQuestion.difficulty = this.difficultyInput;

    $scope.$emit("newQuestion", newQuestion);

  };


  });
