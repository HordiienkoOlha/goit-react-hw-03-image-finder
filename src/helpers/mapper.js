export const mapper = photos => {
  console.log(photos);
  return photos.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
