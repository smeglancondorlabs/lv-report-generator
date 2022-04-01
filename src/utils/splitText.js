const splitText = (text,caracter) => {
    text;
    const result = text.split(caracter)
    return result.map(element => element.trim())
}

export {splitText}
