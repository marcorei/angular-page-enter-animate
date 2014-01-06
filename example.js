(function (window, angular, undefined) {

	
	var app = angular.module('testApp', [
		'mrPageEnterAnimate'
	]);
	

	// Config to trigger animation only if object is completely visible
	
	/*
	var app = angular.module('testApp', ['mrPageEnterAnimate']).config(function(SettingsProvider) {
  		SettingsProvider.setSettings({
  			completelyVisible: true
  		});
	});
	*/

	
})(window, window.angular);