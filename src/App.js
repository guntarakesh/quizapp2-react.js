
import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'which constitution is known as the largest written constitution?',
			answerOptions: [
				{ answerText: 'French ', isCorrect: false },
				{ answerText: 'British', isCorrect: false },
				{ answerText: 'Indian', isCorrect: true },
				{ answerText: 'American', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the last viceroy of British-india?',
			answerOptions: [
				{ answerText: 'Dalhousie', isCorrect: false },
				{ answerText: 'Mountbattein', isCorrect: true },
				{ answerText: 'Munro', isCorrect: false },
				{ answerText: 'Author Cotton', isCorrect: false },
			],
		},
		{
			questionText: 'who is known as the frontier gandhi?',
			answerOptions: [
				{ answerText: 'Khan Abdul Khan', isCorrect: true },
				{ answerText: ' Abdul Kalam', isCorrect: false },
				{ answerText: 'Tilak', isCorrect: false },
				{ answerText: 'Vinobabave', isCorrect: false},
			],
		},
		{
			questionText: 'which crickter wrote the book named "TEST OF MY LIFE" ?',
			answerOptions: [
				{ answerText: 'Ganguli', isCorrect: false },
				{ answerText: 'Yuvaraj Singh', isCorrect: true},
				{ answerText: 'Gibs', isCorrect: false },
				{ answerText: 'Sachin Tendulkar', isCorrect: false },
			],
		},
		{
			questionText: 'who wrote the book named "DISCOVERY OF THE INDIA" ?',
			answerOptions: [
				{ answerText: 'Mahatma Gandhi', isCorrect: false },
				{ answerText: 'Subhas Chandra Bose', isCorrect: false },
				{ answerText: 'Bhagat Singh', isCorrect: false },
				{ answerText: 'Jawaharlal Nehru', isCorrect: true },
			],
		},
		{
			questionText: 'who is the first financial minister of india ?',
			answerOptions: [
				{ answerText: 'Rajgoapl Chari', isCorrect: false },
				{ answerText: 'Jhon Mouthai', isCorrect: true},
				{ answerText: 'Ranjan Gagoi', isCorrect: false },
				{ answerText: 'Sardar Vallabhai Patei', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0)
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}; 
	
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored <b> {score} </b>marks out of  <b>{questions.length} </b> marks
		 
				 </div>   
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
				    	Question <b>{currentQuestion + 1}/{questions.length}</b>
						</div>
						<div className='question-text'><b>{questions[currentQuestion].questionText} </b></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
