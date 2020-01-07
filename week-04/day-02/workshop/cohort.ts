'use strict';

import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort {
    name: string;
    students: Student[] = [];
    mentors: Mentor[] = [];

constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
}


addStudent(Student) {
   this.students.push(new Student);
}

addMentor(Mentor)  {
    this.mentors.push(new Mentor);
}

info() {
    console.log('The ' + this.name + ' cohort has ' + this.students.length + ' students and ' + this.mentors.length + ' mentors.')
}
}

