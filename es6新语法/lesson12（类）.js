{
  // 基本定义和生成实例
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }
  // 创建类的实例
  let v_parent=new Parent('v');
  console.log('构造函数和实例',v_parent);
}

{
  // 继承
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }
  // 通过 extends关键字 实现继承
  class Child extends Parent{

  }

  console.log('继承',new Child());
}

{
  // 继承传递参数
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);
      this.type='child';
    }
  }

  console.log('继承传递参数',new Child('hello'));
}

{
  // getter,setter
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    get longName(){
      return 'mk'+this.name
    }

    set longName(value){
      this.name=value;
    }
  }

  let v=new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
    // 通过 static 关键字创建一个静态方法
    static tell(){
      console.log('tell');
    }
  }
  // 静态方法和动态方法的区别（静态属性和动态属性同样）是：
  // 1.静态方法通过 类.方法名() 调用
  // 2.动态方法通过 实例.方法名() 调用
  Parent.tell();

}

{
  // 静态属性
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }
  // 直接通过 类.属性名 创建一个静态属性
  Parent.type='test';

  console.log('静态属性',Parent.type);


}
