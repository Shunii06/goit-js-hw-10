import axios from 'axios';
import Notiflix from 'notiflix';

const apiKey =
  'live_2iAb0JJ0kYQGOajFpJdtWEgu2YpNS1738lXSkrniIrHsoRdSuAGZG86H0sZSB0O0';
const apiUrl = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = apiKey;

export async function fetchBreeds() {
  try {
    const response = await axios.get(`${apiUrl}/breeds`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching cat breeds data', error);
    Notiflix.Notify.failure('Oops! Something went wrong!', {
      position: 'center-center',
    });
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `${apiUrl}/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error while fetching cat data', error);
    Notiflix.Notify.failure('Oops! Something went wrong!', {
      position: 'center-center',
    });
  }
}
