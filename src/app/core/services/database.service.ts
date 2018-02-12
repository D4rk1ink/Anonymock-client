export const saveToken = (token) => {
    localStorage.setItem('token', token)
}

export const getToken = (): string => {
    return localStorage.getItem('token')
}

export const saveUser = (token: Object) => {
    localStorage.setItem('user', JSON.stringify(token))
}

export const getUser = (): Object => {
    return JSON.parse(localStorage.getItem('user'))
}