describe("test suite: Hello world", function () {

    it("test case 1: should return hello world", function () {
        expect(helloWorld()).toEqual("Hello world!");
    });

});
describe("test suite: isMultiple3", function () {

    it("test case 2: should return true", function () {
        expect(isMultiple3(3)).toEqual(0);
    });

});
describe("test suite: FizzBuzzWhizz", function () {

    it("test case 1: 105 should return FizzBuzzWhizz", function () {
        expect(FizzBuzzWhizz(105)).toEqual("FizzBuzzWhizz");
    });
    it("test case 2: 210 should return FizzBuzzWhizz", function () {
        expect(FizzBuzzWhizz(210)).toEqual("FizzBuzzWhizz");
    });
    it("test case 3: 3 should return Fizz", function () {
        expect(FizzBuzzWhizz(3)).toEqual("Fizz");
    });
    it("test case 4: 35 should return BuzzWhizz", function () {
        expect(FizzBuzzWhizz(35)).toEqual("BuzzWhizz");
    });
    it("test case 5: 21 should return FizzWhizz", function () {
        expect(FizzBuzzWhizz(21)).toEqual("FizzWhizz");
    });
    it("test case 6: 15 should return FizzBuzz", function () {
        expect(FizzBuzzWhizz(15)).toEqual("FizzBuzz");
    });
    it("test case 7: 1 should return 1", function () {
        expect(FizzBuzzWhizz(1)).toEqual(1);
    });
    it("test case 8: -1 should return error", function () {
        expect(FizzBuzzWhizz(-1)).toEqual("input error");
    });
});