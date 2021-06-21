const API_TOKEN = 'https://opentdb.com/api_token.php?command=request';

export async function fetchToken() {
  const response = await fetch(API_TOKEN);
  const data = await response.json();
  return data;
}

export async function fetchTrivia(amount, token) {
  const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&token=${token}&encode=base64`);
  const data = await response.json();
  return data.results;
}
