import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { markupImgCard } from './markupImgCard';
import axios from 'axios';
import simpleLightbox from 'simplelightbox';

const API_KEY = '29337037-f6a5fd668b35f8f6ea13ad624';
const BASE_URL = 'https://pixabay.com/api/';
const refs = {
  form: document.querySelector('#search-form'),
  inputSearch: document.querySelector('input[name="searchQuery"]'),
  btnSearch: document.querySelector('.search-btn'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
  lb: document.querySelector('.gallery a'),
};

let page = 1;

const createUrl = () => {
  const searchResult = refs.inputSearch.value;
  let url = `${BASE_URL}?key=${API_KEY}&q=${searchResult}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  return url;
};

const onSearch = e => {
  page = 1;
  e.preventDefault();
  let url = createUrl();

  getImg(url);

  // кнопка Load More//
  onSeeBtnLoadMore();

  if (e.type === 'submit') {
    refs.gallery.innerHTML = '';
  }
};
// window.addEventListener('scroll', () => {
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     page += 1;
//     let url = createUrl();
//     getImg(url);
//   }
// });
async function getImg(url) {
  try {
    const response = await axios.get(url);
    const hitsPic = response.data.hits;
    const totalHits = response.data.totalHits;

    if (hitsPic === 0) {
      nonImg();
    }
    if (page === 1) {
      totalH(totalHits);
    }

    addCard(hitsPic);
    if (page >= Math.ceil(totalHits / 40)) {
      endImg();
    }
  } catch (error) {
    errorSearch(error);
  }
}

const onLoad = () => {
  page += 1;
  let url = createUrl();
  getImg(url);
};

const onSeeBtnLoadMore = () => {
  refs.btnLoadMore.classList.add('load');
};

const generateCard = array =>
  array ? array.reduce((acc, item) => acc + markupImgCard(item), '') : '';

const addCard = array => {
  const result = generateCard(array);
  refs.gallery.insertAdjacentHTML('beforeend', result);

  let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    close: true,
    enableKeyboard: true,
  });
};

const totalH = totalHits => {
  Notiflix.Notify.info(`Hooray! We found ${totalHits} totalHits images.`);
};

refs.form.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', onLoad);

const errorSearch = error => {
  Notiflix.Notify.failure('Oops, something went wrong!');
};

const nonImg = () => {
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
};
const endImg = () => {
  refs.btnLoadMore.classList.remove('load');
  refs.btnLoadMore.classList.add('hide');
  Notiflix.Notify.warning(
    "We're sorry, but you've reached the end of search results."
  );
};
