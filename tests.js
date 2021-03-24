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