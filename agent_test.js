const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { User, Project } = require("./agent.js");

describe("tests run on the 'agent.js' file:", () => {
  // has the right setup
  it("verifies the test file name", () => {
    wish(fileName() === "agent_test.js");
  });

  // functional tests
  it("returns a string starting with 'my name is' when a new user is created", () => {
    wish(new User("name", "user").sayName() === "my name is name");
  });
  it("returns a string starting with 'the project name is' when a new project is created", () => {
    wish(new Project("name", "project").sayTheName() === "the project name is name");
  });
});
