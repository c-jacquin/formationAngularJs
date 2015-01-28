;
(function () {

    var data = window.mockBackendData;

    var mockBackendConfig = {
        moduleName: 'app',
        mappings: [
            {
                url: /\/userlist/,
                method: 'GET',
                code: 200,
                body: data.userList
            },
            {
                url: /^\/user/,
                body: data.user,
                overrides: {
                    noEdit: {
                        body: data.userNoEdit
                    }
                }
            },
            {
                url: /^\/search/,
                data: '{"query":"one"}',
                method: 'GET',
                code: 200,
                body: [data.searchResults[0]]
            },
            {
                url: /^\/search/,
                method: 'GET',
                code: 200,
                body: data.searchResults
            },
            {
                url: '/settings',
                body: data.settings,
                overrides: {
                    advancedSettings: {
                        body: data.settingsAdvanced
                    }
                }
            }
        ]
    };

    angularMockBack(mockBackendConfig);

}());
