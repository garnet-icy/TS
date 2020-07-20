var str = '12';
var bool = false;
var num = 12;
// 数组两种类型
var arr = [1, 23, 4];
var arr2 = [1, 23, 4];
//枚举类
//数字枚举,默认赋值为1-4
var newEnum;
(function (newEnum) {
    newEnum[newEnum["left"] = 0] = "left";
    newEnum[newEnum["right"] = 1] = "right";
    newEnum[newEnum["up"] = 2] = "up";
    newEnum[newEnum["down"] = 3] = "down";
})(newEnum || (newEnum = {}));
var one = newEnum.left;
// console.log(one);            //数字枚举相当于双向绑定，数字相当于下标，即为反向映射
// console.log(newEnum);
//字符串枚举，
var nums;
(function (nums) {
    nums["name1"] = "www";
    nums["name2"] = "eee";
    nums[nums["name3"] = 2] = "name3";
})(nums || (nums = {}));
//字符串枚举不能以值拿键，
// console.log(nums.name1);    //www
// console.log(nums['www']);   //undefined
// console.log(nums[2]);       //name3、
//异构枚举，枚举有多种数据类型
// any类型,可以修改类型
var val = '123';
console.log(val);
val = true;
console.log(val);
//unknown类型,
// unknown => any   'ok'
// unknown => 其他类型   'no'
//unknown只可以与any相互转化，两种最高级别的类型
//truple类型，即定义数组并且声明每一个元素的类型,且长度不等于元组定义长度时会报错
//void类型，标识函数无返回值时为void
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
