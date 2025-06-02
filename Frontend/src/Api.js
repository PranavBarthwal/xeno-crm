import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const createCampaign = (data) => API.post('/campaigns/create', data);
export const fetchCustomers = () => API.get('/getAllCustomers');
export const fetchOrders = () => API.get('/getAllOrders');
export const createCustomer = (data) => API.post('/createCustomer', data);
export const createOrder = (data) => API.post('/createOrder', data);
export default API;



// Note: send campaignObjective as an object with key campaignObjective, matching backend



