{
  // 声明Symbol数据类型变量
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2); // false
  let a3=Symbol.for('a3');
  let a4=Symbol.for('a3');
  console.log(a3===a4); // true
}

{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj); // {Symbol(abc):'123', abc:345, c:456}

  // 无法通过let of 取到Symbol的key value值
  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value); // abc:345 c:456
  }
  // 通过此方法可以取到Symbol的value值
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]); // 123
  })
  // 通过es6新对象的方法可以取到所有的包含Symbol的key value值
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]); // Symbol(abc):'123' abc:345 c:456
  })
}
