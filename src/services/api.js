import axios from 'axios';


// BASE DA URL:  https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=c8abc1a9489fa07f2afb0537ed08aa5d&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;