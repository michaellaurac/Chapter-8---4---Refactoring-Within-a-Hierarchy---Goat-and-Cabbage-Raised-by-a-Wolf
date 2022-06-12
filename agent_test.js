const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const Agent = require("./agent.js");

describe("tests run on the 'agent.js' file:", () => {
  // has the right setup
  it("verifies the test file name", () => {
    wish(fileName() === "agent_test.js");
  });
  // initialisation
  const agent = new Agent("name");
  const projectOrUser = Agent.makeProjectOrUser(agent);

  // functional tests
  it("returns a string starting with either 'my name is' or 'the project name is'", () => {
    if (projectOrUser.type === "user") {
      wish(projectOrUser.sayName() === "my name is name");
    } else {
      wish(projectOrUser.sayTheName() === "the project name is name");
    }
  });
});
