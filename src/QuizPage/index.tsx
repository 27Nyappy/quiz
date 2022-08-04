import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Button } from '../components';
import { QuizContext } from '../App';
import { questions } from '../utils/data/questions';
import useStyles from './styles';

const QuizPage = () => {
  const navigate = useNavigate();
  const { userAnswers, setUserAnswers } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { classes } = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion + 1]: (event.target as HTMLInputElement).value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentQuestion < 2) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl>
            <FormLabel>{questions[currentQuestion].label}</FormLabel>
            <RadioGroup
              value={userAnswers[currentQuestion + 1]}
              onChange={handleChange}
            >
              {questions[currentQuestion].options.map((option, i) => {
                return (
                  <FormControlLabel
                    key={i}
                    value={option.value}
                    control={<Radio required />}
                    label={option.label}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
        <Button type='submit' className={classes.button}>
          {currentQuestion < 2 ? 'Next' : 'Submit'}
        </Button>
      </form>
    </>
  );
};

export default QuizPage;
