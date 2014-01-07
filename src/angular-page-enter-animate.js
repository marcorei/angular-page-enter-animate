/*
 * Animate elements in as they enter the viewport
 * Heavily inpired by: http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @author Markus Riegel <riegel.markus@googlemail.com>
 */



 (function (window, angular, undefined) {


	var app = angular.module('mrPageEnterAnimate', []);



	angular.module('mrPageEnterAnimate').provider('Settings', function() {

		this.settings = {
			completelyVisible : false
		};

		this.$get = function() {
			var settings = this.settings;
			return {
				key: function(settingsType) {
					return settings[settingsType] || settingsType;
				}
			};
		};

		this.setSettings = function(settings) {
			this.settings = settings;
		};
	});


	

	app.directive('mrPageEnter', [ 'Settings', '$timeout', function(Settings, $timeout){
		return {
			restrict: 'A',
			link: function(scope, elm, attr){


				var enterClass = attr.mrPageEnter;


				/*
				 * Matches the position of the element vs the scroll position
				 * @return boolean
				 */

				var isVisible = function(elm){

					var rect = elm[0].getBoundingClientRect();

					

					if(Settings.key('completelyVisible') === true) {

						return (
							rect.top >= 0 &&
							rect.left >= 0 &&
							rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
							rect.right <= (window.innerWidth || document.documentElement.clientWidth)
						);

					}
					else {

						return (
							rect.bottom >= 0 &&
							rect.right >= 0 &&
							rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
							rect.left <= (window.innerWidth || document.documentElement.clientWidth)
						);

					}

				}


				/*
				 * Scroll / Resize event handler
				 */

				var onChangeHandler = function(){

					if( isVisible(elm) === true ){

						angular.element(window).unbind('scroll', onChangeHandler);
						angular.element(window).unbind('resize', onChangeHandler);
						angular.element(window).unbind('load', onChangeHandler);

						// Delay just in case add it instantely would kill the animation

						$timeout(function(){
							elm.addClass(enterClass+'-active');
						},0);
						

					}

				}

				elm.addClass(enterClass);

				angular.element(window).bind('scroll', onChangeHandler);
				angular.element(window).bind('resize', onChangeHandler);
				angular.element(window).bind('load', onChangeHandler);




			}
		}
	}]);


 })(window, window.angular);