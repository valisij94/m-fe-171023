const simpleObject = {
  name: 'First Name',
  age: 25,
  job: 'Worker'
};

const complexObject = {
  name: 'First Name',
  age: 25,
  job: 'Worker',
  skills: {
      programming: 9,
      testing: 3
  }
};

const DEVELOPER_SKILLS = {
  javascript: {
    skill: 9,
    experience: 5,
    comment: 'Plain old JS'
  },
  css: {
    skill: 8,
    experience: 3,
    comment: 'With preprocessors'
  },
  react: {
    skill: 10,
    experience: 4,
    comment: 'Functional React'
  }
}

const programmerObject = {
  name: 'Programmer',
  age: 35,
  skills: {
    javascript: {
      skill: 9,
      type: 'hardSkill'
    },
    react: {
      skill: 10,
      type: 'hardSkill'
    },
    communication: {
      skill: 7,
      type: 'softSkill'
    },
    attention: {
      skill: 8,
      type: 'softSkill'
    }
  }
}