{
  // genertaor基本定义
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  // Generator 和 iterator 的关系
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  // 状态机循环（3种状态不断切换）
  let state=function* (){
    // while为true无限循环
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

{
  // Generator 的一种语法糖
  let state=async function (){
    while(1){
      await 'A';
      await 'B';
      await 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

{
  // 模拟抽奖次数
  let draw = function (count) {
    // 具体抽奖逻辑
    console.log(`剩余${count}次`)
  }

  let residue = function* (count) {
    while (count > 0) {
      count--
      yield draw(count)
    }
  }
  let star = residue(5)
  document.getElementById('start').addEventListener('click', function () {
    star.next()
  }, false)
}

{
  // 长轮询(实时请求到服务端的数据)
  let ajax = function* () {
    yield new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 200)
    })
  }
  let pull = function() {
    let genertaor = ajax()
    let step = genertaor.next()
    step.value.then(function (d) {
      if (d.code != 0) {
        setTimeout(function() {
          console.log('wait')
          pull()
        }, 1000)
      } else {
        console.log(d)
      }
    })
  }
}