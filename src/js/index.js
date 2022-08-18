import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImg } from './getImg';
import { markupImgCard } from './markupImgCard';
import axios from 'axios';

const refs = {
  form: document.querySelector('#search-form'),
  inputSearch: document.querySelector('input[name="searchQuery"]'),
  btnSearch: document.querySelector('.search-btn'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
};
const API_KEY = '29337037-f6a5fd668b35f8f6ea13ad624';
refs.form.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('clikc', getImg);
const page = 1;
function onSearch(e) {
  e.preventDefault();
  const searchResult = e.currentTarget.elements.searchQuery.value;

  console.log(searchResult);

  //   if (searchResult === '') {
  //     // clearImgs();
  //     return;
  //   }

  async function getImg(searchResult) {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchResult}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
      );
      console.log(response.data);
      const hitsPic = response.data.hits;
      addCard(hitsPic);
    } catch (error) {
      console.log('error', error);
    }
  }
  getImg(searchResult);

  addPage(page);
}
function addPage(page) {
  page += 1;
}
function addCard(data) {
  let picsList = '';
  data.map(data => {
    picsList += markupImgCard(data);
  });

  //   let lightbox = new SimpleLightbox('.gallery a', {
  //     captionDelay: 250,
  //     close: true,
  //     enableKeyboard: true,
  //   });

  refs.gallery.insertAdjacentHTML('beforeend', picsList);
}

// function errorSearch(error) {
//   Notiflix.Notify.failure('Poprobujte escho!');
// }
// const { height: cardHeight } = document
//   .querySelector('.gallery')
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: 'smooth',
// });
