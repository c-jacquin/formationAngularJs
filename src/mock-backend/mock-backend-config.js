;(function() {

var mockBackendConfig = {
	moduleName: 'app',
	mappings: [
		{
			url: /\/userlist/,
			method: 'GET',
			code: 200,
			body: sampleData.userList
		},
		{
			url: /^\/user/,
			body: sampleData.user,
			overrides: {
				noEdit: {
					body: sampleData.userNoEdit
				}
			}
		},
		{
			url: /^\/search/,
			data: '{"query":"one"}',
			method: 'GET',
			code: 200,
			body: [sampleData.searchResults[0]]
		},
		{
			url: /^\/search/,
			method: 'GET',
			code: 200,
			body: sampleData.searchResults
		},
		{
			url: '/settings',
			body: sampleData.settings,
			overrides: {
				advancedSettings: {
					body: sampleData.settingsAdvanced
				}
			}
		}
	]
};

angularMockBack(mockBackendConfig);

}());
