import React, { useState, useContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Button, Fade } from '../components';
import { QuizContext } from '../App';
import { questions } from '../utils/data/questions';
import { AnswerOptionType } from '../utils/types';
import useStyles from './styles';

const QuizPage: FC = () => {
  const navigate = useNavigate();
  const { userAnswers, setUserAnswers } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(true);
  const { classes } = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion + 1]: (event.target as HTMLInputElement).value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);

      if (currentQuestion < 2) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate('/results');
      }
    }, 500);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Fade in={fadeIn}>
          <div>
            <FormControl>
              <FormLabel>{questions[currentQuestion].label}</FormLabel>
              <RadioGroup
                value={userAnswers[currentQuestion + 1]}
                onChange={handleChange}
              >
                {questions[currentQuestion].options.map(
                  (option: AnswerOptionType, i) => {
                    return (
                      <FormControlLabel
                        key={i}
                        value={option.value}
                        control={<Radio required />}
                        label={option.label}
                      />
                    );
                  }
                )}
              </RadioGroup>
            </FormControl>
          </div>
        </Fade>
        <Button type='submit' className={classes.button}>
          {currentQuestion < 2 ? 'Next' : 'Submit'}
        </Button>
      </form>
    </>
  );
};

export default QuizPage;
