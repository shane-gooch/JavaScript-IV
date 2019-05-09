// CODE here for your Lambda Classes

class Person {
    constructor(baseAttr){
    this.name = baseAttr.name;
    this.age = baseAttr.age;
    this.location = baseAttr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(secondAttr){
        super(secondAttr)
        this.specialty = secondAttr.specialty;
        this.favLanguage = secondAttr.favLanguage;
        this.catchPhrase = secondAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject) {
        return `${this.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(thirdAttr){
        super(thirdAttr)
        this.previousBackground = thirdAttr.previousBackground;
        this.className = thirdAttr.className;
        this.favSubjects = thirdAttr.favSubjects;
    }
    listsSubjects() {
        return `Favorite Subjects: ${this.favSubjects}.`
    }
    PMAssignmet(subject) {
       return `${this.name} has submitted a PR for ${subject}`; 
    }
    sprintChallenge(subject) {
       return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr)
        this.grandClassName = attr.grandClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const testStudent = new Student({
    name: 'Shane',
    age: 25,
    location: "San Jose",
    favSubjects: 'javascript'
});
console.log(testStudent.speak());

const testProjectManager = new ProjectManager({
    name: 'Shane',
    age: 25,
    location: "San Jose",
    favSubjects: 'javascript',
    grandClassName: 'web20',
    catchPhrase: 'gottcha',
});
console.log(testProjectManager.debugsCode('bob','html'));
