// variables.ts

import { type } from "os";

// tsc filename.ts
const a = 10;

// types : explicit
const b: string = "test";
const t: number = JSON.parse("10");

// unions
const c: number | string = "sample";

// enums
enum Month {
    Jan,
    Feb,
    March,
    April
}
const m: Month = Month.April;

// user-defiined types
type User = {
    name: string;
    age: number | string;
    email?: string;  // ? used to make it optional
};
const user: User = {
    name: "test",
    age: 16,
    email: "test@abc.com",
};

// intersections
type PersonalDetails = {
    name: string;
    dob: Date;
}
type ContactDetails = {
    email: string;
    phone: number;
}
type Identity = {
    id: number;
}
type Customer = PersonalDetails & ContactDetails;
type Employee = PersonalDetails & ContactDetails & Identity;
// const emp: Employee = {};
// const cust: Customer = {};

// type casting
const element = document.querySelector("input") as HTMLInputElement;  // OR
const ele = <HTMLImageElement>document.querySelector("img");