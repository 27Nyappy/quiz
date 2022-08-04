import { useContext } from 'react';
import { Typography } from '@mui/material';
import { QuizContext } from '../App';
import { questions } from '../utils/data/questions';
import useStyles from './styles';

const Results = () => {
  const { userAnswers } = useContext(QuizContext);
  const { classes } = useStyles();

  const passOrFail = () => {
    const questionAnswers = questions.map((question) => question.answer);
    const chosen = Object.values(userAnswers);
    const correctUserAnswers = questionAnswers.filter((answer) =>
      chosen.includes(answer)
    );

    return correctUserAnswers.length >= 2 ? 'PASSED' : 'FAILED';
  };

  return (
    <>
      <Typography
        className={classes.title}
        component='h1'
        variant='h3'
        align='center'
      >
        {passOrFail()}
      </Typography>
      <div>
        {questions.map((question, i) => {
          const isCorrect = userAnswers[i + 1] === question.answer;

          return (
            <div key={i}>
              <Typography display='inline'>{question.label}</Typography>
              <Typography
                className={classes.answerString}
                color={isCorrect ? 'success.main' : 'error.main'}
                display='inline'
                align='center'
              >
                {isCorrect ? 'Correct' : 'Wrong'}
              </Typography>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
