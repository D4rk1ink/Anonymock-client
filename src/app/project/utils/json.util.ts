export const pretty = (text) => {
    try {
        if (typeof text === 'object') {
            text = JSON.stringify(text)
        }
        text = JSON.stringify(JSON.parse(text), null, 4);
        return text
    } catch (err) {
        throw new Error()
    }
}