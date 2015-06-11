

'use strict';

angular.module('schedulerApp', [])
.controller('SchedulerController', schedulerCtrl);

	function schedulerCtrl() {
		this.plans = [
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
	}
	
	schedulerCtrl.prototype.addNewTask = function() {
		var that = this;

		that.user.displayTime = that.user.hours + ":" + that.user.minutes + that.user.meridiem;
		console.log(that.user.displayTime);

		var timeFound = false; 
			for( var i = 0; i < that.plans.length; i++) {
				console.log(that.user.displayTime);
				console.log(that.plans[i].displayTime);
				if ( that.user.displayTime === that.plans[i].displayTime) {
					alert("You can't enter the same time twice.");
					timeFound = true;
				}
				if(timeFound) return;
			}

		that.plans.push(that.user);
		that.user = '';
		console.log(that.plans);
	}

		
		/*var convert = function(inputTime) {
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

		
		/*$scope.plans.push($scope.user);
		$scope.user = '';
		console.log($scope.plans);
	}

		$scope.plans.sort(function (a, b) {
			console.log(a);
			if (a > b) {
				return 1;
			}
			if (a < b) {
				return -1;
			}
		});
});*/