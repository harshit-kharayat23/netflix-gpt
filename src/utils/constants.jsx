export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const PHOTOURL="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+import.meta.env.VITE_TMDB_KEY,
    }
  };
  
export const MOVIE_IMAGE_URL="https://image.tmdb.org/t/p/w200/"

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"

export const SUPPORTED_LANGUAGES= [
          {identifier:"en",name:"English"},
          {identifier:"hindi",name:"Hindi"},
          {identifier:"spanish",name:"Spanish"}
] 

export const GEMINI_CDN_URL =import.meta.env.VITE_GEMINI_CDN_URL;
export const GEMINI_KEY =import.meta.env.VITE_GEMINI_KEY;
