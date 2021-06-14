const getToken = async () => {
  const tokenUrl = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(tokenUrl);
  const data = await response.json();

  localStorage.setItem('token', data.token);
};

export const fetchQuestions = async () => {
  const token = localStorage.getItem('token');
  const questionsUrl = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(questionsUrl);
  const questions = await response.json();

  // const failedResponse = 3;
  // if (questions.response_code === failedResponse) {
  //   await getToken();
  //   fetchQuestions();
  // }
  return questions;
};

export default getToken;
