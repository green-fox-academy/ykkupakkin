'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
//(6*5*17/52*17 )*100

let DailyCode: number = 6;
let SemesterWeek: number = 17;
let WeeklyCode: number = DailyCode*5;
let AvgHours: number = 52;

console.log(WeeklyCode*SemesterWeek);

console.log((WeeklyCode*SemesterWeek)/(AvgHours*SemesterWeek)*100);