#! /usr/bin/env node

const importLocal = require('import-local');

// 如果传入 fileName ，使用的就是本地加载的脚手架文件
if (importLocal(__filename)) {
    require('npmlog').info('cli', '正在使用 block-cli 本地版本');
} else {
    require('../lib')(process.argv.slice(2));
}
