;(function(sampleData) {

sampleData.userNoEdit = angular.copy(sampleData.user);
sampleData.userNoEdit.canEdit = false;

}(window.sampleData || (window.sampleData = {})));
