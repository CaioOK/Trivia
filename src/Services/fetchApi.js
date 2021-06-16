import md5 from 'crypto-js/md5';

export const getToken = async () => {
  const tokenUrl = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(tokenUrl);
  const data = await response.json();

  localStorage.setItem('token', data.token);
};

export async function fetchGravatar(email) {
  email = email.toLowerCase();
  email = email.replace(/\s/g, '');
  const hash = md5(email).toString();
  try {
    const response = await fetch(`https://www.gravatar.com/avatar/${hash}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.log(error);
  }
}
