const newObject = {};

newObject.name1 = 'Jon';
newObject.name2 = 'Joanna';

newObject.name3 = {
    newName:'Suzana',
    age: 30,
    level: 'junior',
    isMarried: true,
    salary: 1000,
    responsibilities: ['Write simple code according to tasks', 'Fix small bugs', 'Create unit tests', 'Participate in code reviews' ]
};


newObject.responsibilitiesOutput = function () {
    console.log(this.name3.responsibilities);

};

newObject.responsibilitiesOutput();
