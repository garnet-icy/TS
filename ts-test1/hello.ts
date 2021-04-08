let str:string = '12';
let bool:Boolean = false;
let num:number = 12;
// 数组两种类型
let arr:Array<number> = [1,23,4];
let arr2:number[] = [1,23,4];

//枚举类
  //数字枚举,默认赋值为1-4
enum newEnum {
  left,
  right,
  up,
  down
}
let one:newEnum = newEnum.right;
console.log(one)
  //数字枚举相当于双向绑定，数字相当于下标，即为反向映射
  //字符串枚举，
enum nums {
  name1,
  name2,
  name3
}
let nameewer:nums = nums.name3
console.log(nameewer)
      //字符串枚举不能以值拿键，
//     //www
//    //undefined
//        //name3、
//异构枚举，枚举有多种数据类型



// any类型,可以修改类型
let val: any = '123';

val = true;
  //
//unknown类型,
// unknown => any   'ok'
// unknown => 其他类型   'no'
//unknown只可以与any相互转化，两种最高级别的类型



//truple类型，即定义数组并且声明每一个元素的类型,且长度不等于元组定义长度时会报错


//void类型，标识函数无返回值时为void

function warnUser(): void {

}
warnUser();

//never类型，判断类型时不明时可赋值为never型，never可赋值为任何类型
enum color {red,green,blue="#3399FF"}
let myColor:color = color.blue
let newColor:color = color.green
 //#3399FF 1


/**
 *class类
*/// constructor 示例
class PersonB {

  constructor(public name:string){
    this.name = name
  }
}
class Teacher extends PersonB{
  constructor(public age: number ) {
    super('LinYY') // 初始化父类的 name
  }
}
const teacher = new Teacher(18)


enum Direction {
  Up,
  Down = 'str',
  Left,
  Right
}
let myTest:Direction = Direction.Down
let myTest1:Direction = Direction.Left
console.log(myTest)
console.log(myTest1)