const selfClearTimeout = (callback , timeout) => {
    const timer = setTimeout(() => {
        callback()
        clearTimeout(timer)
    } , timeout)
}



export {
    selfClearTimeout
}