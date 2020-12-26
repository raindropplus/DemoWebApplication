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