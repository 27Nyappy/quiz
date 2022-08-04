import React, { useState, useContext } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Button } from '../components';
import { QuizContext } from '../App';

const QuizPage = () => {
  const { userAnswers, setUserAnswers } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  const questions = [
    {
      label: 'Which breed of dog was originally bred to hunt wolves?',
      options: [
        {
          label: 'Neapolitan Mastiff',
          value: 'neapolitan-mastiff',
        },
        {
          label: 'Leonberger',
          value: 'leonberger',
        },
        {
          label: 'Transylvanian Hound',
          value: 'transylvanian-hound',
        },
        {
          label: 'Irish wolfhound',
          value: 'irish-wolfhound',
        },
      ],
    },
    {
      label: "Where do Shiba Inu's come from?",
      options: [
        {
          label: 'Liechtenstein',
          value: 'liechtenstein',
        },
        {
          label: 'Gine-Bissau',
          value: 'gine-bissau',
        },
        {
          label: 'Japan',
          value: 'japan',
        },
        {
          label: 'Tonga',
          value: 'tonga',
        },
      ],
    },
    {
      label:
        'Most dog breeds bark, but what does the Basenji breed do instead?',
      options: [
        {
          label: 'Yodel',
          value: 'yodel',
        },
        {
          label: 'Scream',
          value: 'scream',
        },
        {
          label: 'Squeak',
          value: 'squeak',
        },
        {
          label: 'Chirp',
          value: 'chirp',
        },
      ],
    },
  ];

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
        <Button type='submit' style={{ display: 'flex' }}>
          {currentQuestion < 2 ? 'Next' : 'Submit'}
        </Button>
      </form>
    </>
  );
};

export default QuizPage;
