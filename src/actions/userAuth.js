import fetch from 'isomorphic-fetch'
import { API } from '../config'
import { handleResponse } from './auth'
export const preSignup = (user) => {
  return fetch(`${API}/pre-signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const signup = (activationToken) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ activationToken })
  }).then(res => res.json()).catch(error => error)
}
export const login = (user) => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const getUserProfile = (token) => {
  return fetch(`${API}/user`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const updateUserProfile = (token, user) => {
  return fetch(`${API}/user/update`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...user })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const companyJustForYou = (token) => {
  return fetch(`${API}/user/companyJustForYou`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const rejectRequest = (token, contactRequestId) => {
  return fetch(`${API}/user/reject`, {
    method: 'POST',
    headers: {
      Accept: 'charset=utf-8',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ contactRequestId })
  }).then(res => res.json()).catch(error => error)
}
export const cancelRequest = (token, contactRequestId) => {
  return fetch(`${API}/user/cancelRequest`, {
    method: 'POST',
    headers: {
      Accept: 'charset=utf-8',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ contactRequestId })
  }).then(res => res.json()).catch(error => error)
}
export const acceptRequest = (token, contactRequestId) => {
  return fetch(`${API}/user/accept`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ contactRequestId })
  }).then(res => res.json()).catch(error => error)
}
export const contactMe = (token, companyId) => {
  return fetch(`${API}/user/contactMe`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ companyId })
  }).then(res => res.json()).catch(error => error)
}
export const userPublish = (token) => {
  return fetch(`${API}/user/publish`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }).then(res => res.json()).catch(error => error)
}
export const blockCompany = (token,companyId)=>{
  return fetch(`${API}/user/block`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ companyId })
  }).then(res => res.json()).catch(error => error)
}
export const unblockCompany = (token,companyId)=>{
  return fetch(`${API}/user/unblock`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ companyId })
  }).then(res => res.json()).catch(error => error)
}
export const forgetPassword = (email)=>{
  return fetch(`${API}/forget-password`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const resetPassword = (resetPasswordLink, newPassword )=>{
  return fetch(`${API}/reset-password`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ resetPasswordLink, newPassword })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}