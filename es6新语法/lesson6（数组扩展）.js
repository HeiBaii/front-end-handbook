{
  // 把一组变量转换成数组
  let arr = Array.of(3,4,7,9,11);
  console.log(arr); // [3,4,7,9,11]

  // 不传值返回空数组
  let empty=Array.of();
  console.log(empty); // []
}

{
  // <p>1</p>
  // <p>2</p>
  // <p>3</p>
  // 将一个集合转换成数组
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    // textContent 原生js获取dom节点文本内容的方法
    console.log(item.textContent); // [1,2,3]
  });
  // 返回数组中计算过后的值
  console.log(Array.from([1,3,5],function(item){return item*2})); // [2,6,10]
}

{
  // 用7替换数组中所有的值
  console.log([1,'a',undefined].fill(7)); // [7,7,7]
  // 用7替换掉数组中从下标1到3的值
  console.log(['a','b','c'].fill(7,1,3)); // ['a',7,7]
}

{
  // 返回该数组中的下标
  for(let index of ['1','c','ks'].keys()){
    console.log(index); // 0 1 2
  }
  // 返回该数组的value
  for(let value of ['1','c','ks'].values()){
    console.log(value); // 1 c ks
  }
  // 返回下标和值
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log(index,value); // 0 1  1 c  2 ks
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // [4,2,3,4,5]
}

{
  // 找到符合条件的第一个返回这个值
  console.log([1,2,3,4,5,6].find(function(item){return item>3})); // 4
  // 找到符合条件的第一个返回这个值的下标
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3})); // 3
}

{
  // 找到符合条件的值，返回布尔值
  console.log([1,2,NaN].includes(1)); // true
  console.log([1,2,NaN].includes(NaN)); // true
}
