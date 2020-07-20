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
let one:newEnum = newEnum.left;
// console.log(one);            //数字枚举相当于双向绑定，数字相当于下标，即为反向映射
// console.log(newEnum);
  //字符串枚举，
enum nums {
  name1 = 'www',
  name2 = 'eee',
  name3 = 2,
}
      //字符串枚举不能以值拿键，
// console.log(nums.name1);    //www
// console.log(nums['www']);   //undefined
// console.log(nums[2]);       //name3、
//异构枚举，枚举有多种数据类型



// any类型,可以修改类型
let val: any = '123';
  // console.log(val);
val = true;
  // console.log(val);
//unknown类型,
// unknown => any   'ok'
// unknown => 其他类型   'no'
//unknown只可以与any相互转化，两种最高级别的类型



//truple类型，即定义数组并且声明每一个元素的类型,且长度不等于元组定义长度时会报错


//void类型，标识函数无返回值时为void

function warnUser(): void {
  console.log("This is my warning message");
}
warnUser();

//never类型，判断类型时不明时可赋值为never型，never可赋值为任何类型
