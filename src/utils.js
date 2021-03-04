const validate = (key, loginForm) => {
    console.log(key, 'keyValue');

    let fields = key === 'all' ? [key.name] : [key];
    let errors = {};
    let errorsData = errors ? errors : {};
    fields.forEach(field => {
        let loginFormelements = loginForm.current;
        if (!loginFormelements[field] || loginFormelements[field].value.trim() === '') {
            errorsData[field] = (field) + 'is required';
        } else {
            delete errorsData[field];
        }
    });
    // setErrors(Object.assign({}, errorsData));
    return errorsData;
};

export default validate
