(() => {
  const game = () => {
    const score = {
      botScore: 5,
      userScore: 5,
    };

    const randomGenerate = (max, min) => {
      const answerBot = Math.round(Math.random() * (max - min) + max);
      return answerBot;
    };

    return function start() {
      const answerUser = +prompt(`Загадайте число от ${1}
      до ${score.userScore}`);

      if (answerUser % 2 === randomGenerate(1, 2)) {
        score.userScore -= answerUser;
        score.botScore += answerUser;
      } else {
        score.botScore -= answerUser;
        score.userScore += answerUser;
      }

      if (score.botScore > 0 && score.userScore > 0) {
        console.log(score.botScore);
        console.log(score.userScore);
        start();
      } else {
        alert(`кол-во шаров у бота: ${score.botScore};
        кол-во шаров у вас ${score.userScore}`);
        location.reload();
      }
    };
  };

  window.marble = game;
})();
