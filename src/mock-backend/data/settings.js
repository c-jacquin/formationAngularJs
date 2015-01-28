(function (mockBackendData) {

    mockBackendData.settings = {
        "reallyCool": true,
        "isAdvanced": false
    };

    mockBackendData.settingsAdvanced = angular.copy(mockBackendData.settings);

    mockBackendData.settingsAdvanced.isAdvanced = true;
    mockBackendData.settingsAdvanced.makeShiny = 0;
    mockBackendData.settingsAdvanced.makeShinyOptions = [
        {
            shiny: 0,
            description: "I don't know, cats?"
        },
        {
            shiny: 1,
            description: "Something about The Alliance"
        },
        {
            shiny: 2,
            description: "Browncoats"
        }
    ];
    
}(window.mockBackendData || (window.mockBackendData = {})));
