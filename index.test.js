

const sum = require("./index")

describe("should contain tests fo sum", () => {
    it("should add 2 number", () => {
        //Arrange
        const a = 4;
        const b = 6;
        const expectedResults = 10;

        //Act
        const actual=sum(a, b);

        //Assert
        expect(actual).toBe(expectedResults);
    })
})


describe("should return an error for invalid reason", () => {
    it("should add 2 number", () => {
        //Arrange
        const a = null;
        const b = 6;
        const expectedResults = "invalid InPut";

        //Act
        const actual=sum(a, b);

        //Assert
        expect(actual).toBe(expectedResults);
    })
})