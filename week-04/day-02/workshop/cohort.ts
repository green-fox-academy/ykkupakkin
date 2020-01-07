'use strict';

class Cohort {
    name: string;
    students: string; // list of students
    mentors: string; // list of mentors

constructor(name: string, students: string[], mentors: string[]) {
    this.name = name;
    this.students = Student.name;
    this.mentors = Mentor.name;
}


addStudent(Student) {
    // adds the given Student to students list
}

addMentor(Mentor)  {
    // adds a mentor to the mentors list
}

info() {
    console.log('The ' + this.name + ' cohort has ' + Student.size + ' students and ' + Mentor.size + ' mentors.')
}
}

