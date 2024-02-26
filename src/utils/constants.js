export const netflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export  const urlOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_TOKEN
  }
};

export const img_card_url = "https://image.tmdb.org/t/p/w500";

export const bg_img_url = 'https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg';

export const supported_lang = [{id: 'en', name: 'English'},
{id: 'hindi', name: 'Hindi'}, {id: 'spanish', name: 'Spanish'}];
