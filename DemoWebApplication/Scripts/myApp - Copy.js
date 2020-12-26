//var app = angular.module('MyApp', ['datatables']);
//app.controller('homeCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
//    function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
//        $scope.dtColumns = [
//            //DTColumnBuilder.newColumn("CustomerID", "Customer ID"),
//            //DTColumnBuilder.newColumn("CompanyName", "Company Name"),
//            //DTColumnBuilder.newColumn("ContactName", "Contact Name"),
//            //DTColumnBuilder.newColumn("Phone", "Phone"),
//            //DTColumnBuilder.newColumn("City", "City")
//            DTColumnBuilder.newColumn("Note", "Note")
//        ]

//        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('ajax', {
//            url: "http://localhost:50883/api/Posts",
//            type: "GET"
//        })
//        .withPaginationType('full_numbers')
//        .withDisplayLength(10);

//    }])



var testApp = angular.module("MyApp", ['angularUtils.directives.dirPagination']);

testApp.controller("homeCtrl", function ($scope, $http) {
    $scope.home = "This is the homepage";

    $scope.postList = [];
    $scope.commentsList = [];
    //    Our GET request function
    $scope.getPosts = function () {        
        $http.get("http://localhost:50883/api/Posts").then(
            function successCallback(response) {
                $scope.postList = response.data;
            },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );
    };
    $scope.getPosts();

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.dateOf = function (utcDateStr) {
        return new Date(utcDateStr);
    }

    $scope.User = {
        Email: "admin@abc.com",
        Password: "Admin@123$",
        ConfirmPassword: "Admin@123$"
    }


    //    Our POST request function
    $scope.CreateUser = function () {
        $http.post("http://localhost:50883/api/Account/Register", $scope.User).then(
            function successCallback(response) {
                console.log("Successfully POST-ed data");
            },
            function errorCallback(response) {
                console.log("POST-ing of data failed");
            }
        );
    };
    //$scope.CreateUser();
});




//var vm = this;
    //vm.users = []; //declare an empty array
    //vm.pageno = 1; // initialize page no to 1
    //vm.total_count = 0;
    //vm.itemsPerPage = 10; //this could be a dynamic value from a drop down

    //vm.getData = function (pageno) { // This would fetch the data on page change.
    //    //In practice this should be in a factory.
    //    vm.users = [];
    //    $http.get("http://localhost:50883/api/Posts/page/" + vm.itemsPerPage + "/" + pageno).success(function (response) {
    //        vm.users = response.data;  //ajax request to fetch data into vm.data
    //        vm.total_count = response.total_count;
    //    });
    //};
    //vm.getData(vm.pageno); // Call the function to fetch initial data on page load.
