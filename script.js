const jokeBox = document.getElementById('joke');
const button = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {

  // const proxyURL = "https://quicors.herokuapp.com/";
  const url = 'https://icanhazdadjoke.com';
  // const URL = proxyURL + url;

  const headers = {
    headers: {
    'Accept': 'application/json',
    }
  };

  try {
    const resp = await fetch(url, headers);
    const data = await resp.json();
    jokeBox.innerText = data.joke;
  }
  catch(e) {
    console.log(e);
  }

}

button.addEventListener('click', generateJoke);