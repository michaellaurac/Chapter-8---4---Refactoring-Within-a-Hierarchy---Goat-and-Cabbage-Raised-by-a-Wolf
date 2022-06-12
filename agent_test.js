const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { coinToss, User, Project } = require("./agent.js");

describe("tests run on the 'agent.js' file:", () => {
  // has the right setup
  it("verifies the test file name", () => {
    wish(fileName() === "agent_test.js");
  });
  // initialisation
  let agent;
  if (coinToss()) {
    agent = new User("name", "user");
  } else {
    agent = new Project("name", "project");
  }

  // functional tests
  it("returns a string starting with either 'my name is' or 'the project name is'", () => {
    if (agent.type === "user") {
      wish(agent.sayName() === "my name is name");
    } else {
      wish(agent.sayTheName() === "the project name is name");
    }
  });
});
