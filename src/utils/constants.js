export const routesPath = {
  login: "/",
  browse: "/browse",
};

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
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2M0ODFmMzFhZTMxMTUwZjI3NzdhNjU2NWY3ZTc2MyIsIm5iZiI6MTczMTY0MDAwOC4yMDQ4NjUsInN1YiI6IjVmODMyMDZjMzg0NjlhMDAzOThlZGNmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fQwX3ILkzJxdosrGF11yLBiZvhEUokezDwQ68w8hg6E",
  },
};
