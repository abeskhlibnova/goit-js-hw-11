const KEY = '29337037 - f6a5fd668b35f8f6ea13ad624';
const BASE_URL = 'https://pixabay.com/api/';

// export async function getImg(searchResult) {
//   try {
//     const response = await fetch(
//       `${BASE_URL}${KEY}q=${searchResult}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('error', error);
//   }
// }

export function getImg() {
  fetch(
    '${BASE_URL}${KEY}q=cat&image_type=photo&orientation=horizontal&safesearch=true'
  )
    .then(r => r.json())
    .then(console.log);
}
