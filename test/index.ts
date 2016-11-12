import { expect } from "chai";
import * as classes from "./TestClasses";
import { declarations } from "..";

describe("Module decorator test", () => {
    it("Module a should contains MyFirstClass", () => {
        expect(declarations["a"][0]).to.equal(classes.MyFirstClass);
        expect(declarations["a"].length).to.equal(1);
    });

    it("Module b should contains MySecondClass", () => {
        expect(declarations["b"][0]).to.equal(classes.MySecondClass);
        expect(declarations["b"].length).to.equal(1);
    });
});