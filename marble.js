(() => {
  const game = () => {
    const botScore = [];
    const userScore = [];

    const scoreCount = (score, arr) => {
      for (let i = 0; i < score; i++) {
        arr[i] = i;
      }
    };

    scoreCount(5, botScore);
    scoreCount(5, userScore);

    const randomGenerate = (max, min) => {
      const index = Math.round(Math.random() * (max - min) + max);
      return index;
    };

    return function start() {
      const answerUser = +prompt(`Загадайте число от ${1}
      до ${userScore.length}`);

      if (answerUser % 2 === randomGenerate(1, 2)) {
        scoreCount(botScore.length + answerUser, botScore);
        userScore.length -= answerUser;
      } else {
        botScore.length -= answerUser;
        scoreCount(userScore.length + answerUser, userScore);
      }

      if (botScore.length > 0 && userScore.length > 0) {
        console.log(botScore);
        console.log(userScore);
        start();
      } else {
        alert(`кол-во шаров у бота: ${botScore.length};
        кол-во шаров у вас ${userScore.length}`);
        location.reload();
      }
    };
  };

  window.marble = game;
})();
