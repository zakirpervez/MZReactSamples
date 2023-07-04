import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
     headers: {
        Authorization: 'Client-ID -BC5FGBbngxpRrvNe3bn2M9fcyslUV5IUjnOeGPGB7o'
     },
     params: {
        query: term
     }
  });
  return response.data.results;
};

export default searchImages;