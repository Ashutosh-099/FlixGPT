export const routesPath = {
  login: "/",
  browse: "/browse",
  gptSearchView: "/browse/gptSearch"
};

export const SUPPORTED_LANGUAGE = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"}
];

export const strings = {
  headerLogoURL: "./assets/logo-complete.png",
  headerLogoAlt: "flix-gpt-logo",
  headerProfileLogoURL: "/assets/profile-logo.png",
  headerProfileAlt: "profile-image",
  signOutTooltip: "Leaving so soon? ;(",
  signOutBtnName: "Sign Out",
  signIn: "Sign In",
  signUp: "Sign Up",
  nameInputPlaceholder: "Name",
  emailInputPlaceholder: "Email",
  passwordInputPlaceholder: "Password",
  createAccountBtnName: "Create account",
  newToFlix: "New to FlixGPT? ",
  existingAccount: "Existing Account? ",
  signupNow: "Sign up now.",
  signInNow: "Sign in now.",
};

export const apiURLs = {
  nowPlayingMovies: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  movieTrailer: "https://api.themoviedb.org/3/movie/",
  popularMovies: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  topRatedMovies: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

export const OPENAI_KEY= process.env.REACT_APP_OPENAI_API_KEY;