function getParam(location, key){
    const params = new URLSearchParams(location.search);

    return params.get(key);

}

export default getParam;