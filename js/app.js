

'use strict';

angular.module('schedulerApp', [])
.controller('SchedulerController', schedulerCtrl);

	function schedulerCtrl() {
		this.plans = [
		{
			displayTime: '05:00pm',
			duration: '30',
			task: 'Team meeting',
			standardTime: '1700'
		},
		{
			displayTime: '06:00pm',
			duration: '60',
			task: 'Watch a js talk online',
			standardTime: '1800'
		},
		];

		var clicked = true;
	}
	
	schedulerCtrl.prototype.addNewTask = function() {
		var that = this;

		//var cat = that.user.displayTime;

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

		
		var input = that.user.displayTime;
		var hours = input.substr(0,2);
		var hoursInt = parseInt(hours);
		console.log(hours)
			if((input.indexOf('am') > -1) && (hoursInt == 12)) {
				input = input.replace('12', '00');
				console.log(input)
			}
			if((input.indexOf('pm') > -1) && (hoursInt < 12)) {
				input = input.replace(hours, (hours + 12));
				console.log(input)
			}
			input = input.replace(':', '').trim();
			input = input.replace(/(am|pm)/, '');
			console.log(input)


		
		that.user.standardTime = input;
		that.plans.push(that.user);
		that.user = '';
		console.log(that.plans);

}
schedulerCtrl.prototype.start = function() {

	this.clicked = !this.clicked;

}

	/*schedulerCtrl.prototype.change = function() {
		var that= this;
		var inputTime = that.user.displayTime;
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
	}




		/*var hours = parseInt(cat.substr(0,2));
		if(cat.indexOf('am') && hours == 12){
			cat = cat.replace('12', '00');
			console.log(cat)
		}
		if(cat.indexOf('pm') && hours < 12) {
			cat = cat.replace(hours, (hours + 12));
		}
		cat = cat.replace(/(am|pm)/, '');
		console.log(cat)
	}*/

		
		/*var convert = function(inputTime) {
			var hours = parseInt(inputTime.substr(0,2));
			console.log(hours);
			if(inputTime.indexOf('am') && hours == 12) {
				inputTime = inputTime.replace(		'12', '0');
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