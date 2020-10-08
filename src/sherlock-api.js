import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
  return request.post(`${URL}/api/v1/auth/signup`, userData);
}

export function login(userData) {
  return request.post(`${URL}/api/v1/auth/login`, userData);
}

export function getPortfolio() {
  try {
    return request.get(`${URL}/api/v1/auth/verify`);
  } catch(e) {
    return { error: e.message }
  }
}

export function insertStock(stock) {
  try {
    return request.post(`${URL}/api/v1/stocks`, stock);
  } catch(e) {
    return { error: e.message }
  }
}

export function updateStock(stockId, stockUpdate) {
  try {
    return request.put(`${URL}/api/v1/stocks/${stockId}`, stockUpdate);
  } catch(e) {
    return { error: e.message }
  }
}

export function deleteStock(stockId) {
  try {
    return request.delete(`${URL}/api/v1/stocks/${stockId}`);
  } catch(e) {
    return { error: e.message }
  }
}