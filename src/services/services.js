import axios from "axios"

const API_KEYv3 = '?api_key=4cb310273ec3b649af80c35bcb0dcf76';
// const API_KEYv4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2IzMTAyNzNlYzNiNjQ5YWY4MGMzNWJjYjBkY2Y3NiIsInN1YiI6IjYxNzkzM2Q5YTA5N2RjMDA5MjFjOWYwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ClHkUTaGuk3K9d8cQDryb8Fnzci4C9BYUSXi6tIDkyk'
const BASE_URL='https://api.themoviedb.org/3/'
// https://developers.themoviedb.org/3/trending/get-trending
// https://developers.themoviedb.org/3/search/search-movies
// https://developers.themoviedb.org/3/movies/get-movie-details 
// https://developers.themoviedb.org/3/movies/get-movie-credits 
// https://developers.themoviedb.org/3/movies/get-movie-reviews 

export const fetchPopularAPI = () => {   
    const url = `${BASE_URL}trending/all/day${API_KEYv3}`;

    return axios(url).then(({ data }) => {
        return data.results;
    })
};
// 
export const fetchQueryAPI = (id) => {
    const url = `${BASE_URL}movie/${id}${API_KEYv3}&language=en-US`
    return axios(url).then(resp => {
      return resp;       
    })
}