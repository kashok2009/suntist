var app = angular.module("suntist", []);
app.controller("SuntistController", ['$scope', function ($scope) {
	$scope.personalDetails = [];

	$scope.addNew = function (personalDetails) {
		$scope.personalDetails.push({
			'name': personalDetails.name,
			'age': personalDetails.age,
			'gender': personalDetails.gender,
		});

	};


}]);


app.controller('aboutus', function ($scope, $http) {
	$http.get('https://api.suntist.com/aboutus/').
	then(function (response) {
		$scope.category = response.data.results[0].category;
		$scope.description = response.data.results[0].description;

	});
});