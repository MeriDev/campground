import axios from 'axios';

const API_URL = 'http://localhost:5000/api/campgrounds/';

//Add camp
const createCampground = async campData => {
  const response = await axios.post(API_URL, campData);
  return response.data;
};

//Get camps
const getCampgrounds = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Get camp
const getCampground = async campId => {
  const response = await axios.get(API_URL + campId);
  return response.data;
};

//Delete camps
const deleteCampground = async campId => {
  const response = await axios.delete(API_URL + campId);
  return response.data;
};

//Edit camps
const editCampground = async (campId, newCamp) => {
  const response = await axios.put(API_URL + campId, newCamp);
  return response.data;
};

const campServices = {
  createCampground,
  getCampgrounds,
  getCampground,
  deleteCampground,
  editCampground,
};

export default campServices;
