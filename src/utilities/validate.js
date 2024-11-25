export function validateUsername(id){
    // regular expression: starts with letter, uppper+lower, dash, underscore.
    const re = /^[a-zA-Z_][a-zA-Z0-9\-\_]+$/;
    const isValid = re.test(id);
    // setErrorUsername(!isValid);
    return isValid;
}

// regular expressions
export function validatePassword(id) {
    const re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    const isValid = re.test(id);
    // setErrorPassword(!isValid);
    return isValid;
  }