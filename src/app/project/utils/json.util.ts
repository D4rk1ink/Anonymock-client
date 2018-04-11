export const pretty = (text) => {
    try {
        if (typeof text === 'object') {
            text = JSON.stringify(text)
        }
        text = JSON.stringify(JSON.parse(text), null, 4)
        return text
    } catch (err) {
        throw new Error()
    }
}

export const clone = (json) => {
    return JSON.parse(JSON.stringify(json))
}

export const toArray = (json) => {
    if (Array.isArray(json)) {
        return json
    } else {
        const entities = []
        for (const key in json) {
            entities.push({
                key: key,
                value: json[key] || ''
            })
        }
        return entities
    }
}

export const toJSON = (data) => {
    if (typeof data === 'string') {
        return JSON.parse(data)
    } else if (Array.isArray(data)) {
        const json = {}
        for (const arr of data) {
            if (arr.key.trim() !== '') {
                json[arr.key] = arr.value
            }
        }
        return json
    }
    return data
}
