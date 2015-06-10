

'use strict';

angular.module('schedulerApp', [])
.controller('SchedulerController', function($scope) {
	$scope.plans = [
	{
		displayTime: '05:00pm',
		hours: '05',
		minutes: '00',
		meridiem: 'pm',
		standardTime: 1700,
		duration: '30',
		task: 'Team meeting',
	},
	{
		displayTime: '06:00pm',
		hours: '06',
		minutes: '00',
		meridiem: 'pm',
		standardTime: 1800,
		duration: '60',
		task: 'Watch a js talk online'
	},
	];

	
	$scope.addNewTask = function() {
		$scope.user.displayTime = $scope.user.hours + ":" + $scope.user.minutes + $scope.user.meridiem;
		

		var timeFound = false; 
			for( var i = 0; i < $scope.plans.length; i++) {
				console.log($scope.user.displayTime);
				console.log($scope.plans[i].displayTime);
				if ( $scope.user.displayTime === $scope.plans[i].displayTime) {
					alert("You can't enter the same time twice.");
					timeFound = true;
				}
				if(timeFound) return;
			}
		
			/*function convert(inputTime){
			var hours = parseInt(inputTime.substr(0,2));
			console.log(hours);
			if(inputTime.indexOf('am') && hours == 12) {
				inputTime = inputTime.replace('12', '0');
			}
			if(inputTime.indexOf('pm') && hours < 12) {
				inputTime = inputTime.replace(hours, (hours + 12));
			}
			inputTime = inputTime.replace(':', '').trim();
			return parseInt(inputTime.replace(/(am|pm)/, ''));
				console.log(inputTime);
		}*/

		
		$scope.plans.push($scope.user);
		$scope.user = '';
		console.log($scope.plans);
	}

		/*$scope.plans.sort(function (a, b) {
			console.log(a);
			if (a > b) {
				return 1;
			}
			if (a < b) {
				return -1;
			}
		});*/
});
