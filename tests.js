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