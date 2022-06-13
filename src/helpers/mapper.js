export const mapper = photos => {
  console.log(photos);
  return photos.map(({ id, tags, webformatURL, largeImageURL }) => ({
    id,
    tags,
    webformatURL,
    largeImageURL,
  }));
};
