const trimm = (trimmingChars, maxLenght) => post => {
        const regexp = /[a-zA-Z]|\d|[^\u0000-\u007F]+$/
        const trimmedPost = (post.length > maxLenght) ? post.substring(0, maxLenght) : post
        const checkLastLetter = t => (regexp.test(t)) ? t.substring(0, t.length -1) : t
        const withNoSpecialChar = checkLastLetter(checkLastLetter(trimmedPost))
        
        return `${withNoSpecialChar}${trimmingChars}`
    }

export default trimm