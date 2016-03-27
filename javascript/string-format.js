// 简易的 python format 方法替代
String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

console.log('{0} is dead, but {1} is alive! {0} {2}'
            .format('ASP', 'ASP.NET', 'goodbye!'));
