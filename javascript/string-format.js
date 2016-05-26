// 简易的 python format 方法替代
// 完整的实现可以使用：https://github.com/davidchambers/string-format
// 或者：https://github.com/alexei/sprintf.js
String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

console.log('{0} is dead, but {1} is alive! {0} {2}'
            .format('ASP', 'ASP.NET', 'goodbye!'));
