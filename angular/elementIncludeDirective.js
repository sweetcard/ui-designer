app.directive('elementInclude', function ($compile, $http) {

	return {
		restrict: 'E',
		link : function(scope, iElement){
			
			// Loop trough the child elements and add to the view
			var html = 	$('<element value="element" ng-repeat="element in value.elements" />');
			iElement.html(html);
					
			// Add tekst to element when no childeren availible
			if(!angular.isArray(scope.value.elements)){
				var please = $('<div ng-show="!value.elements.length" class="please">Please Drag Element</div>');
				iElement.append(please);
			}
			
			$compile(iElement.contents())(scope); 
			
			

		}

	}

});