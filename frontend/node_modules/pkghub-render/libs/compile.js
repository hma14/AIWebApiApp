var fs = require('fs'),
    errors = require('./errors');

// 根据指定模板引擎编译 html 
// 内置的渲染引擎（即使不提供也能找到的）有 swig 和 jade
// @params: 
// @template: 模板绝对地址
// @data: 模板变量
// @engine: 引擎对象，包括 engine.name, engine._engine
// @callback: 回调函数
module.exports = function(template, data, engine, callback) {
    var html;
    var name = engine.name;
    var _engine = engine._engine;
    if (name === 'jade') html = _engine.renderFile(template, data);
    if (name === 'swig') html = _engine.compileFile(template)(data);
    if (name === 'ejs') html = _engine.render(fs.readFileSync(template), data);
    if (!html) return callback(new Error(errors['406']));
    if (typeof(html) === 'object') return callback(html);
    return callback(null, html, template, data, engine);
};