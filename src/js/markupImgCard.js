export function markupImgCard({
  webformatURL,
  largeImageUR,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" class="photo-img" width="250" height="200"/>
    <div class="info">
    <div class="info-wrapper">
      <p class="info-item">
        <b>Likes</b>
      </p>
      <p class="info-item-amount">${likes}</p>
      </div>
      <div class="info-wrapper">
      <p class="info-item">
        <b>Views</b>
      </p>
      <p class="info-item-amount">${views}</p>
      </div>
      <div class="info-wrapper">
      <p class="info-item">
        <b>Comments</b>
      </p>
      <p class="info-item-amount">${comments}</p>
      </div>
      <div class="info-wrapper">
      <p class="info-item">
        <b>Downloads</b>
      </p>
      <p class="info-item-amount">${downloads}</p>
      </div>
    </div>
  </div>

    `;
}
