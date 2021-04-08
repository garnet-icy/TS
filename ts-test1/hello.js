var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var one = newEnum.right;
console.log(one);
//数字枚举相当于双向绑定，数字相当于下标，即为反向映射
//字符串枚举，
var nums;
(function (nums) {
    nums[nums["name1"] = 0] = "name1";
    nums[nums["name2"] = 1] = "name2";
    nums[nums["name3"] = 2] = "name3";
})(nums || (nums = {}));
var nameewer = nums.name3;
console.log(nameewer);
//字符串枚举不能以值拿键，
//     //www
//    //undefined
//        //name3、
//异构枚举，枚举有多种数据类型
// any类型,可以修改类型
var val = '123';
val = true;
//
//unknown类型,
// unknown => any   'ok'
// unknown => 其他类型   'no'
//unknown只可以与any相互转化，两种最高级别的类型
//truple类型，即定义数组并且声明每一个元素的类型,且长度不等于元组定义长度时会报错
//void类型，标识函数无返回值时为void
function warnUser() {
}
warnUser();
//never类型，判断类型时不明时可赋值为never型，never可赋值为任何类型
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color["blue"] = "#3399FF";
})(color || (color = {}));
var myColor = color.blue;
var newColor = color.green;
//#3399FF 1
/**
 *class类
*/ // constructor 示例
var PersonB = /** @class */ (function () {
    function PersonB(name) {
        this.name = name;
        this.name = name;
    }
    return PersonB;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, 'LinYY') // 初始化父类的 name
         || this;
        _this.age = age;
        return _this;
    }
    return Teacher;
}(PersonB));
var teacher = new Teacher(18);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction["Down"] = "str";
    Direction[Direction["Left"] = void 0] = "Left";
    Direction[Direction["Right"] = void 0] = "Right";
})(Direction || (Direction = {}));
var myTest = Direction.Down;
var myTest1 = Direction.Left;
console.log(myTest);
console.log(myTest1);
