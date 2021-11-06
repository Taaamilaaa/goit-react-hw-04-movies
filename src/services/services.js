import axios from "axios"

const API_KEYv3 = '?api_key=4cb310273ec3b649af80c35bcb0dcf76';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularAPI = () => {   
    const url = `${BASE_URL}trending/movie/week${API_KEYv3}`;

    return axios(url).then(({ data }) => {
        return data.results;
    }).catch(error => error);
};


export const fetchMovieByQuery = (query) => {

  const url = `${BASE_URL}search/movie${API_KEYv3}&language=en-US&query=${query}&page=1&include_adult=false`
    return axios(url).then(resp => {
      return resp;       
    }).catch(error => error);
}

export const fetchMovieById = (id) => {
  const url = `${BASE_URL}movie/${id}${API_KEYv3}&language=en-US`;
   return axios(url).then(resp => {
      
      return resp;       
    }).catch(error => error);
}

export const fetchMovieActorsById = (id) => {
  const url = `${BASE_URL}movie/${id}/credits${API_KEYv3}&language=en-US`;
 
  return axios(url).then(resp => {
            return resp;       
    }).catch(error => error);
}


export const fetchMovieOverviewById = (id) => {
  const url = `${BASE_URL}movie/${id}/reviews${API_KEYv3}&language=en-US&page=1`;
 
  return axios(url).then(resp => {
  
      return resp;       
    }).catch(error => error);
}