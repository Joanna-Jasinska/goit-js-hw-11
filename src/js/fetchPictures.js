import axios from 'axios';

const ax = axios.create({
  timeout: 6000,
  // url: '/user',
  method: 'get', // default
  baseURL: '',
  // web,
  // 'https://some-domain.com/api',
  // headers: {'X-Custom-Header': 'foobar'}
});

export const fetchPictures = txt => {
  // element.value
  const req = txt.trim().replaceAll(' ', '+');
  if (!req) {
    return;
  }
  // if (resetSearch) {
  //   lastPage = 0;
  // }
  // lastPage++;
  const web = 'https://pixabay.com/api';
  const myKey = '/?key=35027326-a21b3e2be23d4febb1cd3f928&q=';
  let pagination = `&page=${lastPage}&per_page=${IMAGES_PER_PAGE}`;
  const searchType = '&image_type=photo&orientation=horizontal&safesearch=true';
  const all = web + myKey + req + searchType + pagination;
  // const fake ='https://pixabay.com/api/?key=35027326-a21b3e2be23d4febb1cd3f928&q=cat&image_type=photo&page=2&per_page=30';

  return axios.get(`${all}`, {
    params: {
      method: 'get', // default
      baseURL: web,
    },
  });
};
