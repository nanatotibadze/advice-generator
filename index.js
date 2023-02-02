"use strict";

const btn = document.querySelector(".btn");
const title = document.querySelector(".content__title");
const text = document.querySelector(".content__text");

let advice = {};

const showAdvice = async function () {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();

    let { slip } = data;

    advice.id = slip.id;
    advice.text = slip.advice;
    if (!res.ok) throw new Error("Can't load an Advice, try again later");
  } catch (err) {
    throw err;
  }
};

showAdvice();

const loadAdvice = function (data) {
  showAdvice();

  title.textContent = `Advice #${data.id}`;
  text.textContent = ` ${data.text}`;
};

btn.addEventListener("click", () => loadAdvice(advice));
