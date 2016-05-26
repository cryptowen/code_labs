// javascript 实现类
function Bird(adj) {
  this.adj = adj || 'normal';
  this.speak = function(line) {
    console.log('The', this.adj, 'bird says "' + line + '".');
  };
  /*
  只读属性，可以使用以下方法
  http://stackoverflow.com/questions/7757337/defining-read-only-properties-in-javascript
  */
  Object.defineProperty(this, "species", {
    value: "bird",
    writable: false
  });
  /*
  模拟Python的 @property 效果，制造一个无法被改变的，动态生成的属性，类似string.length的效果
  同理可以模拟 setter 和 getter
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  */
  Object.defineProperty(this, 'adjLength', {
    get: function() {
      return this.adj.length;
    }
  });
}

fatBird = new Bird('fat');
fatBird.speak('Hello, World!');
console.log(fatBird.adjLength);

console.log(fatBird.species);
fatBird.species = 'cat';
console.log(fatBird.species);

fatBird.adjLength = 'long';
console.log(fatBird.adj);
console.log(fatBird.adjLength);
