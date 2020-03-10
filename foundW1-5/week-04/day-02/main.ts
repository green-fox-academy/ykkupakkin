import { Person } from './person'
import { Student } from './student'
import { Sponsor } from './sponsor'
import { Mentor } from './mentor'

let SponsorOne = new Sponsor("Jane Doe", 30, "female", "Google", 0);
let MentorOne = new Mentor("Jane Doe", 30, "female", "junior");
let StudentOne = new Student("Jane Doe", 30, "female", "The School of Life", 0);
let PersonOne = new Person("Jane Doe", 30, "female");


let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Mark', 46, 'male');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('John Doe', 20, 'male', 'BME');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(mentor);
let sponsor = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});
