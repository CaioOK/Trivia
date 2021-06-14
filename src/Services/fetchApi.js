const getToken = async () => {
  const tokenUrl = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(tokenUrl);
  const data = await response.json();

  localStorage.setItem('token', data.token);
};

export default getToken;
