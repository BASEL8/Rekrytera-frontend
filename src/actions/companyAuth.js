import fetch from 'isomorphic-fetch'
import { API } from '../config'
import { handleResponse } from './auth'

export const preSignup = (user) => {
  return fetch(`${API}/company/pre-signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const signup = (activationToken) => {
  return fetch(`${API}/company/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ activationToken })
  }).then(res => res.json()).catch(error => error)
}
export const login = (user) => {
  return fetch(`${API}/company/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const updateCompanyProfile = (token, user) => {
  return fetch(`${API}/company/update`, {
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
export const companyCreateAnnounce = (token, announce) => {
  return fetch(`${API}/company/announce`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...announce })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const getCompanyProfile = (token) => {
  return fetch(`${API}/company`, {
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
export const removeAnnounce = (token, _id) => {
  return fetch(`${API}/company/announce/remove`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ _id })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const justForYourCompany = (token) => {
  return fetch(`${API}/company/justForYouCompany`, {
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
export const sendContactRequest = (token, _id) => {
  return fetch(`${API}/company/contactUser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ _id })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const declinedUser = (token, userId) => {
  return fetch(`${API}/company/declinedUser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const cancelContactUser = (token, userId) => {
  return fetch(`${API}/company/cancelContactUser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const acceptContactRequestFromUser = (token, userId) => {
  return fetch(`${API}/company/acceptContactRequestFromUser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const declineContactRequestFromUser = (token, userId) => {
  return fetch(`${API}/company/declineContactRequestFromUser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId })
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const blockUser = (token,userId)=>{
  return fetch(`${API}/company/block`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId })
  }).then(res => res.json()).catch(error => error)
}
export const unblockUser = (token,userId)=>{
  return fetch(`${API}/company/unblock`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId })
  }).then(res => res.json()).catch(error => error)
}
export const forgetPassword = (email)=>{
  return fetch(`${API}/company/forget-password`, {
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
  return fetch(`${API}/company/reset-password`, {
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
export const getUserPublicProfile = (token, _id) => { }
