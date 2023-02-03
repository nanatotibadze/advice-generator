"use strict";

const btn = document.querySelector(".btn");
const title = document.querySelector(".content__title");
const text = document.querySelector(".content__text");



const loadAdvice = function (data) {


  title.textContent = `Advice #${data.id}`;
  text.textContent = ` ${data.advice}`;
};


const showAdvice = async function () {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();


    let { slip } = data;

    loadAdvice(slip);

    if (!res.ok) throw new Error("Can't load an Advice, try again later");
  } catch (err) {
    throw err;
  }
};

showAdvice();



btn.addEventListener("click", () => showAdvice());

