// KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA
// 4b5c805839mshcd094bce9a3d09cp171badjsn96132de4294c
// 58a4a12380msh763fe407c70ee0fp1161edjsne1381f4a3640
import axios from "axios";

async function requestGetTopic(query = "New") {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: query,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "4b5c805839mshcd094bce9a3d09cp171badjsn96132de4294c",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  return axios.request(options);
  // .then(function (response) {
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });
}
export default requestGetTopic;

async function requestGetDetail(id) {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: { part: "contentDetails,snippet,statistics", id: `${id}` },
    headers: {
      "X-RapidAPI-Key": "4b5c805839mshcd094bce9a3d09cp171badjsn96132de4294c",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  return axios.request(options);
}
export { requestGetDetail };

export async function requestGetRelate(id) {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: id,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "4b5c805839mshcd094bce9a3d09cp171badjsn96132de4294c",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  return axios.request(options);
}

export async function requestGetSubmit(query) {
  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/search",
    params: { query: query, geo: "US", lang: "en" },
    headers: {
      "X-RapidAPI-Key": "4b5c805839mshcd094bce9a3d09cp171badjsn96132de4294c",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };
  return axios.request(options);
}
