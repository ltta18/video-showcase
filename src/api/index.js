const axios = require('axios');

const backendURL = 'http://127.0.0.1:3001';

export async function getVideos() {
  try {
    const response = await axios.get(`${backendURL}/video`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getVideoById(id) {
  try {
    const response = await axios.get(`${backendURL}/video/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
