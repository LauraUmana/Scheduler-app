

'use strict';

angular.module('schedulerApp', [])
.controller('SchedulerController', schedulerCtrl);

	function schedulerCtrl() {
		var that = this;
		that.plans = [
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
	
	
	function addNewTask() {
		var that = this;
		//This alerts the user when they enter the same time twice
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

		//creates the local time into military time
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


		//pushes the user input into the plans array
		that.user.standardTime = input;
		that.plans.push(that.user);
		that.user = '';
		console.log(that.plans);
}

	//var clicked = false;
	function ping() {
		var that = this;
		console.log('before', that.clicked)
		that.clicked = !that.clicked;
		console.log('after', that.clicked)
	}
	that.addNewTask = addNewTask;
	that.ping = ping;
	that.clicked = false;
}