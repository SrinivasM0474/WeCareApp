const validate = (key, loginForm) => {
    let errorsData = {};
    let loginFormelements = loginForm.current;
    if (!loginFormelements[key] || loginFormelements[key].value.trim() === '') {
        errorsData[key] = key + ' is required';
        return errorsData
    } else {
        delete errorsData[key];
        return errorsData
    }


};

export default validate