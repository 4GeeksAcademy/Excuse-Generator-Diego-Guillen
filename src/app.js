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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function getExcuse(whoDid, actionDid, whatDid, whenDid) {
  indexPicture = getRandomIndex(whoDid);
  return `${who[indexPicture]} ${action[getRandomIndex(actionDid)]} ${
    what[getRandomIndex(whatDid)]
  } ${when[getRandomIndex(whenDid)]}`;
}

function ramdomExcuse() {
  document.getElementById("excuses").innerHTML = getExcuse(
    who,
    action,
    what,
    when
  );
  document.getElementById("image").src = whoPicture[indexPicture];
}

window.onload = () => {
  //write your code here
  ramdomExcuse();
};

document.getElementById("p1").onclick = function() {
  ramdomExcuse();
};
