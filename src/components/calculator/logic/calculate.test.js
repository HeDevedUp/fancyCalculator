import calculate from "./calculate";
import chai from "chai";

// https://github.com/chaijs/chai/issues/469
chai.config.truncateThreshold = 0;
const expect = chai.expect;

// write a function that will get the value of pressed button 

function pressedButtons(buttons) {
    const value = {}
    buttons.forEach(button => {
        Object.assign(value, calculate(value, button))
    });
    // no need to distinguish between null and undefined values
    Object.keys(value).forEach(key => {
        if (value[key] === null) {
            delete value[key];
        }
    })
    return value;
}
function expectedButtons(buttons, expectations) {
    expect(pressedButtons(buttons)).to.deep.equal(expectations)

}
function test(buttons, expectations, only = false) {
    const func = only ? it.only : it;
    func(`buttons ${buttons.join("")}->${JSON.stringify(expectations)}`, () => {
        expectedButtons(buttons, expectations)
    });

}
describe('calculate', function () {

    test(["6"], { next: "6" })




})