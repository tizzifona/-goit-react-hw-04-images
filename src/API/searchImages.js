import Notiflix from 'notiflix';
const API_KEY = '35150720-b15f0fa2c687c3d3761b15b78';
const searchImages = (query, page = 1) => {
  const url = `https://pixabay.com/api/?q=${encodeURIComponent(query)}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oooops...nothing was found');
        throw new Error('Error fetching images');
      }
      return response.json();
    })
    .then((data) => {
      if (data.hits.length === 0) {
        Notiflix.Notify.failure('Oooops...nothing was found');
        return [];
      }
      return data.hits.map((image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));
    });
};

export default searchImages;

