(function() {
    'use strict';

    angular.module('NameAsciiValue', [])
    .controller('AsciiCalculatorController', function($scope){
        $scope.name = "";
        $scope.totalValue = "";
        
        $scope.displayValue = function(){
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue;
        }

    });
    
})();