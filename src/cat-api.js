// function fetchBreeds() {
//   const params = new URLSearchParams({
//     api_key:
//       'live_HdNlE2QjmnSGUwk1cp6ewGM5XOwGN5A9sR2O5W0dj2AnvayQ2cvIrTac3HwQdaPE',
//   });
//   return fetch(`https://api.thecatapi.com/v1/breeds?${params}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Error');
//       }
//       return res.json();
//     })
//     .catch(err => {
//       throw new Error('Error');
//     });
// }

// function fetchCatByBreed(breedId) {
//   const params = new URLSearchParams({
//     api_key:
//       'live_HdNlE2QjmnSGUwk1cp6ewGM5XOwGN5A9sR2O5W0dj2AnvayQ2cvIrTac3HwQdaPE',
//     breed_ids: breedId,
//   });
//   return fetch(`https://api.thecatapi.com/v1/images/search?${params}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Error');
//       }
//       console.log(res);
//       return res.json();
//     })
//     .catch(err => {
//       throw new Error('Error');
//     });
// }

// export { fetchBreeds, fetchCatByBreed };

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_HdNlE2QjmnSGUwk1cp6ewGM5XOwGN5A9sR2O5W0dj2AnvayQ2cvIrTac3HwQdaPE';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function fetchCatByBreed(breedId) {
  const params = new URLSearchParams({
    breed_ids: breedId,
  });
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?${params}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

export { fetchBreeds, fetchCatByBreed };
