const Mock = require('mockjs');

require('./services/manage');
Mock.setup({
    timeout: 800
});
