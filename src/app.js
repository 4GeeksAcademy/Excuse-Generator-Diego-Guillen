/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let indexPicture;
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let whoPicture = [
  "https://www.volvethosp.com/blog/wp-content/uploads/2016/09/VolVet_iStock_33198234_LARGE.jpg",
  "https://re-ignite.net/wp-content/uploads/2016/04/smiling-grandmacanstockphoto19547674.jpg",
  "https://m.media-amazon.com/images/M/MV5BOWM1NjNjZDUtODQ1YS00YmI4LWExMGMtNzY5MGVmZTg0YTc3XkEyXkFqcGdeQXVyMTAwOTU0OTI2._V1_.jpg",
  "https://media.gq.com/photos/5a3bff68c2cf0649ff7c22bc/16:9/w_2560%2Cc_limit/star-wars-porg.jpg"
];

function changeImage(imgId, a) {
  document.getElementById(imgId).src = a;
}

function getExcuse() {
  let indexWho = Math.floor(Math.random() * who.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexWhat = Math.floor(Math.random() * what.length);
  let indexWhen = Math.floor(Math.random() * when.length);
  indexPicture = indexWho;
  return `${who[indexWho]} ${action[indexAction]} ${what[indexWhat]} ${when[indexWhen]}`;
}

window.onload = () => {
  //write your code here
  document.getElementById("excuses").innerHTML = getExcuse() + indexPicture;
  document.getElementById("image").src = whoPicture[indexPicture];
};
