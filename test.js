function isEmpty(value) {
    let result = false;
    switch (typeof value) {
        case "boolean":
            result = true;
            break;
        case "undefined":
            result = true;
            break;
        case "number":
            result = true;
            break;
    }
    if (!result) {
        if (!value) {
            result = true;
        }
    }
    return result;
}
console.log(isEmpty(1))