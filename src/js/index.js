import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { getImg } from './getImg';
// import { markupImgCard } from './markupImgCard';

const refs = {
  form: document.querySelector('#search-form'),
  inputSearch: document.querySelector('input[name="searchQuery"]'),
  btnSearch: document.querySelector('.search-btn'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
};

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  //   const searchResult = refs.inputSearch.value;

  //   if (searchResult === '') {
  //     // clearImgs();
  //     return;
  //   }
  const url =
    'https://pixabay.com/api/?key=29337037-f6a5fd668b35f8f6ea13ad624&q=yellow+flowers&image_type=photo&pretty=true';

  fetch(url)
    .then(r => r.json())
    .then(console.log);
  // .then(markupImgCard);
  //   getImg();
}

// function imgCard(imgs) {
//   let imgMarkup = '';
//   imgs.map(img => {
//     imgMarkup += markupImgCard(img);
//   });
//   refs.gallery.insertAdjacentElement('afterbegin', imgMarkup);
// }
// function errorSearch(error) {
//   Notiflix.Notify.failure('Poprobujte escho!');
// }
