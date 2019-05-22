{
  // 函数默认值
  function test(x, y = 'world'){
    console.log(x,y);
  }
  test('hello'); // hello world
  test('hello','kill'); // hello kill
}

{
  // 函数作用域
  let x='test';
  function test2(x,y=x){
    console.log(x,y); // kill kill
  }
  test2('kill');

  let x='test';
  function test3(a,y=x){
    console.log(a,y); // kill test
  }
  test3('kill');
}

{
  // 把离散的值转换成一个数组
  function test3(...arg){
    for(let v of arg){
      console.log(v); // 1 2 3 4 a
    }
  }
  test3(1,2,3,4,'a');
}

{
  // 把一个数组拆散成离散的值
  console.log(...[1,2,4]); // 1 2 4
  console.log('a',...[1,2,4]);// a 1 2 4
}

{
  // 箭头函数
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log(arrow(3)); // 6
  console.log(arrow2()); // 5

}

{
  // 函数伪调用
  function tail(x){
    console.log(x); // 123
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}
