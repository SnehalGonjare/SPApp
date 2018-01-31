myApp.controller("landingCtrl", function ($scope) {
    //For upload CSV File

    $scope.uploadList = function (selectedCsvFile, errFiles, type) {
        $scope.csvFile = [];
        if (selectedCsvFile && selectedCsvFile.length) {
            if (selectedCsvFile[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                selectedCsvFile[0].uploadtype = type;
                $scope.csvFile.push(selectedCsvFile[0]);
                $scope.toDisplayUploadCSV = false;
                $scope.csvFileDetails = angular.copy($scope.csvFile[0].name);
               // $scope.uploadFiles();
            } else {
                swal({ title: "error", text: "Please select only csv file", allowOutsideClick: false, type: "error" });
            }
        }
    }
}); 


