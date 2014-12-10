'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope) {

    $scope.quiz = [
    {
      'q': 'Who is the best ping pong player at FSA?',
      'options': [{ 'value': 'Mike'} , { 'value': 'Eddie'} , {'value' : 'Nimit'} , { 'value': 'Patrick'}],
      'answer': 'Nimit',
      'difficulty' : 3
    },
    { 'q': 'Which robot name was chanted during Lego Mindstorms?',
    'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
    'answer':'noHope.js',
    'difficulty' : 1
  },
  {
    'q': 'Out of the following frontend frameworks, which framework is most rails-like',
    'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
    'answer':'Ember.js',
    'difficulty' : 4
  },
  {
    'q': 'Which project used a local data store?',
    'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
    'answer':'Twitter.js',
    'difficulty' : 2
  }
  ];


  $scope.submit = function() {
    if(this.question.input === this.question.answer) {

      $scope.$emit('score', 5);
      alert('+5!!!');
    }

  };


  $scope.addQuestion = function() {

    var newQuestion = {},
    optionArray = [];

    newQuestion.q = this.txtNewQuestion;
    optionArray.push({'value': this.txtOption1 });
    optionArray.push({'value': this.txtOption2 });
    optionArray.push({'value': this.txtOption3 });
    optionArray.push({'value': this.txtOption4 });
    newQuestion.options = optionArray;
    newQuestion.answer = this.radioInput;
    newQuestion.difficulty = this.difficultyInput;

    $scope.quiz.push(newQuestion);
    console.log(newQuestion);

  };
  



  });
