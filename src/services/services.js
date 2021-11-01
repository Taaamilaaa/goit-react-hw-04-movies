import axios from "axios"

const API_KEYv3 = '?api_key=4cb310273ec3b649af80c35bcb0dcf76';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularAPI = () => {   
    const url = `${BASE_URL}trending/all/day${API_KEYv3}`;

    return axios(url).then(({ data }) => {
        return data.results;
    })
};

//
export const fetchMovieByQuery = (query) => {
  console.log(query);
  const url = `${BASE_URL}search/movie/${API_KEYv3}&language=en-US&query=${query}&page=1&include_adult=false`
    return axios(url).then(resp => {
      return resp;       
    })
}
//  movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const fetchMovieById = (id) => {
  const url = `${BASE_URL}movie/${id}${API_KEYv3}&language=en-US`;
  console.log(url);
  return axios(url).then(resp => {
      console.log(resp);
      return resp;       
    })
}