import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Express API 伺服器

export async function fetchCarousel() {
  const response = await axios.get(`${API_BASE_URL}/carousel`);
  return response.data;
}

export async function fetchAbout() {
  const response = await axios.get(`${API_BASE_URL}/about`);
  return response.data;
}

export async function fetchPlans() {
  const response = await axios.get(`${API_BASE_URL}/plans`);
  return response.data;
}