{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6); // {o:1, k:2} {o:1, k:2}

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello()); // hello hello
}

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj); // {a:'c', b:'c'} {b:'c'}

}

{
  // 判断两个参数是不是完全相等
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); // true true
  console.log('数组',Object.is([],[]),[]===[]); // false false
  // 对象浅拷贝
  console.log('拷贝',Object.assign({a:'a'},{b:'b'})); // {a:'a',b:'b'}

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]); // [k:123] [o:456]
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
