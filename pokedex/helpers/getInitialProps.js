const getInitialProps = async obj => {
    let promises = Object.keys(obj).map(key => {
        return obj[key]
    })
    let results = await Promise.all(promises)
    
    let props = {}
    Object.keys(obj).map((key, index) => {
        props[key] = results[index]
    })
    
    return props
}

export default getInitialProps