// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("addOne", function() {
    it('should be a defined function', function(){
        expect(typeof addOne).toBe('function');
    });
    it('should return a number when called', function() {
        expect(typeof addOne()).toBe("number");
    });
    it('should return the number 3 when passed the argument of the number 2', function() {
        expect(addOne(2)).toBe(3);
    });
    it('should return the number -43 when passed the argument of the number -44', function() {
        expect(addOne(-44)).toBe(-43);
    });
    it('should return NaN when passed the string "Hello world"', function () {
        expect(Number.isNaN(addOne("Hello world"))).toBe(true);
    });
    it('should return NaN when passed the boolean value true', function () {
        expect(Number.isNaN(addOne(true))).toBe(true);
    });
    // it('should return NaN when passed the array [1,2,3]', function () {
    //     expect(Number.isNaN(addOne([1,2,3]))).toBe(true);
    // });
});
describe("sayHello", function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Alex!" when passed the string: "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed the string: "Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should never return Undefined', function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return "Hello, World! when passed the boolean value of true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World! when a NULL value is passed.', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
});
describe("isFive", function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return the boolean value false when passed the number 4', function () {
        expect(isFive(4)).toBe(false);
    });
    it('should return false when passed the string "yes"', function () {
        expect(isFive("yes")).toBe(false);
    });
    it('should not be undefined', function () {
        expect(isFive()).not.toBe(undefined);
    });
    it('should return true when paseed the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});
describe("isEven", function(){
    it('should return a boolean value no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the number 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the number -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the string "bananas"', function () {
        expect(isEven("bananas")).toBe(false);
    });
    it('should return true when passed "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean value false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed an empty argument', function () {
        expect(isEven()).toBe(false);
    });
});
describe("isVowel", function(){
    it('should always return a boolean value', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed the boolean value true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed the string "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed an empty argument', function () {
        expect(isVowel()).toBe(false);
    });
});




