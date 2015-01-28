;
(function (mockBackendData) {

    mockBackendData.user = {
        "id": 1,
        "gender": "M",
        "firstName": "Henry",
        "lastName": "Stevens",
        "email": "hstevens0@nba.com",
        "street": "4 Westridge Lane",
        "city": "Sidi Yahia el Gharb",
        "country": "Morocco",
        "zip": "83492",
        "canEdit": true
    };

    mockBackendData.userNoEdit = angular.copy(mockBackendData.user);
    mockBackendData.userNoEdit.canEdit = false;

}(window.mockBackendData || (window.mockBackendData = {})));
