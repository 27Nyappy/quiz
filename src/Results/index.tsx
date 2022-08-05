import { useContext, FC } from 'react';
import { Typography } from '@mui/material';
import { QuizContext } from '../App';
import { Fade } from '../components';
import { questions } from '../utils/data/questions';
import { AnswerDataType } from '../utils/types';
import useStyles from './styles';
import useSharedStyles from '../sharedStyles.styles';

const Results: FC = () => {
  const { userAnswers } = useContext(QuizContext);
  const { classes } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();

  const passOrFail = () => {
    const questionAnswers = questions.map(
      (question: AnswerDataType) => question.answer
    );
    const chosen = Object.values(userAnswers);
    const correctUserAnswers = questionAnswers.filter((answer: string) =>
      chosen.includes(answer)
    );

    return correctUserAnswers.length >= 2 ? 'PASSED' : 'FAILED';
  };

  return (
    <Fade>
      <div>
        <Typography
          className={sharedClasses.title}
          component='h1'
          variant='h3'
          align='center'
          color='primary.main'
        >
          {passOrFail()}
        </Typography>
        <div>
          {questions.map((question: AnswerDataType, i) => {
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
      </div>
    </Fade>
  );
};

export default Results;
