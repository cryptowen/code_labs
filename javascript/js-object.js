// javascript 实现类
function Bird(adj) {
  this.adj = adj || 'normal';
  this.speak = function(line) {
    console.log('The', this.adj, 'bird says "' + line + '".');
  };
  // 模拟Python的 @property 效果，制造一个无法被改变的，动态生成的属性，类似string.length的效果
  Object.defineProperty(this, 'length', {
    get: function() {
      return this.adj.length;
    }
  });
}

fatBird = new Bird('fat');
fatBird.speak('Hello, World!');
console.log(fatBird.length);

fatBird.length = 'long';
console.log(fatBird.adj);
console.log(fatBird.length);
