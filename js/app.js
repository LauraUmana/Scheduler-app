'use strict';

angular.module('schedulerApp', [])
.controller('SchedulerController', function($scope) {
	$scope.plans = [
	{
		time: '5:00pm',
		duration: '30',
		task: 'Team meeting'
	},
	{
		time: '6:00pm',
		duration: '60',
		task: 'Watch a js talk online'
	},
	
	];
	
	$scope.addNewTask = function() {
		$scope.plans.push($scope.user);
		console.log('about to add ' + $scope.user.time + ' item to the list.');
		$scope.user = '';
	}

	
});