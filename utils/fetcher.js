export const fetchWrapper = {
  get,
  post,
  postMultipart,
  put,
  putMultipart,
  delete: _delete,
}

function get(url) {
  const requestOptions = {
    method: 'GET',
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function postMultipart(url, body) {
  const requestOptions = {
    method: 'POST',
    body,
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function putMultipart(url, body) {
  const requestOptions = {
    method: 'PUT',
    body,
  }
  return fetch(url, requestOptions).then(handleResponse)
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
  }
  return fetch(url, requestOptions).then(handleResponse)
}

// helper functions

function handleResponse(response) {
  return response.json().then((data) => {
    if (!response.ok) {
      handleErrorByCode(response.status)

      const error = data || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

export const handleErrorByCode = (status) => {
  if (status === 400) {
    window.location.href = '/400'
  }
  if (status === 401) {
    window.location.href = '/401'
  }
  if (status === 403) {
    window.location.href = '/403'
  }
  if (status === 500) {
    window.location.href = '/500'
  }
  if (status === 505) {
    window.location.href = '/505'
  }
}
