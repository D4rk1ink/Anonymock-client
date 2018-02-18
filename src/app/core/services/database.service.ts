export const saveToken = (token: string) => {
    localStorage.setItem('token', token)
}

export const getToken = (): string => {
    return localStorage.getItem('token')
}

export const saveUser = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = (): any => {
    return JSON.parse(localStorage.getItem('user'))
}

export const saveProject = (projectId: string) => {
    localStorage.setItem('project', projectId)
}

export const getProject = (): string => {
    return localStorage.getItem('project')
}

export const clearAll = () => {
    localStorage.clear()
}

