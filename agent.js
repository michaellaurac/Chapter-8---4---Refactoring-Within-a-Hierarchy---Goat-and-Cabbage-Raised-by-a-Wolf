function coinToss () {
  return Math.random() > 0.5;
};

class Agent {
  constructor (name, type) {
    this.name = "name";
    this.type = "type";
  };

  static makeProjectOrUser (agent) {
    if (agent.type === "user") {
      return Object.assign(Object.create(new User()), agent);
    } else {
      return Object.assign(Object.create(new Project()), agent);
    }
  };
};

class User extends Agent {
  constructor (name, type) {
    super();
    this.name = name;
    this.type = type;
  };

  sayName () {
    return `my name is ${this.name}`;
  }
};

class Project extends Agent {
  constructor (name, type) {
    super();
    this.name = name;
    this.type = type;
  };

  sayTheName () {
    return `the project name is ${this.name}`;
  }
};

module.exports = { coinToss, Agent, User, Project };
