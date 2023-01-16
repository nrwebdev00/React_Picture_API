import axios from 'axios';

const searchImages = async (term, page = 1) =>{
  const res = await axios.get(import.meta.env.VITE_UNSPLASH_URI_PHOTOS, {
    headers:{
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
    },
    params:{
      query: term,
      per_page: 25,
      page,
    },
  });
  console.log(res.data.total)
  return res.data.results;
}

export default searchImages;