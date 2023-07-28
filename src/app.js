/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

window.onload = () => {
  //write your code here
  let index = Math.floor(Math.random() * 3);
  console.log("Hello Rigo from the console!");
  document.getElementById("exucses").innerHTML = "New Text!";
};
