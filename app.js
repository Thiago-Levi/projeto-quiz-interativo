const form = document.querySelector(".quiz-form");
const finalScoreContainer = document.querySelector(".final-score-container");
const correctAnswers = ["D", "B", "C", "A"];
let score = 0;
//////////
const resetButton = document.querySelector(".reset-button");

const getUserAnswers = () => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];
  return userAnswers;
};

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index];
    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  finalScoreContainer.classList.remove("d-none");
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalScoreContainer.querySelector("span").textContent = `${counter++}%`;
  }, 10);
};

const reset = () => {
  finalScoreContainer.setAttribute(
    "class",
    "final-score-container py-4 d-none bg-light text-center"
  );
  counter = 0;
  score = 0;
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAnswers = getUserAnswers();

  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalScore();
});

resetButton.addEventListener("click", () => {
  reset();
});
