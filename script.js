"use strict";

const btnSubmit = document.querySelector("button");
const validEmail = document.querySelector(".valid-email");
let inputText = document.querySelector("#email");

const valid = function (elementValue) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
};

btnSubmit.addEventListener("click", function () {
  if (valid(inputText.value)) {
    validEmail.textContent = "Successfully sent!";
    validEmail.classList.remove("hidden");
    inputText.value = " ";

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else {
    validEmail.classList.remove("hidden");
  }

  setTimeout(() => {
    inputText.value = " ";

    validEmail.classList.add("hidden");
  }, 4000);
});
