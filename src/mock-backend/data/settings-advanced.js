;(function(sampleData) {
	sampleData.settingsAdvanced = angular.copy(sampleData.settings);

	sampleData.settingsAdvanced.isAdvanced = true;
	sampleData.settingsAdvanced.makeShiny = 0;
	sampleData.settingsAdvanced.makeShinyOptions = [
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
}(window.sampleData || (window.sampleData = {})));

