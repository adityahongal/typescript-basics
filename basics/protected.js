// Just like Private and Public there is another property called Protected
// Also called as access modifiers
// Protected can be accessed in that class
// and can be inherited in other classes as well but not outside the classes
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
var User1 = /** @class */ (function () {
    function User1(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _courseCount: 1
        this._courseCount = 1;
        this.city = "Bengaluru";
    }
    Object.defineProperty(User1.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be greater than 1");
            }
            this._courseCount = 1;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
// using inheritance we create subuser
// it inherits the parent class user1
// but it cannot acquire the private property such as _courseCount
// using protected we can access it only inside other classes not outside class
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User1));
var jala1 = new User1("jala1@jala1.com", "jala", 6989);
