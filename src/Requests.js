const apiKey = '9001aaea9ffb856077874b6f2762bef4';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=2`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
};

export default requests;
