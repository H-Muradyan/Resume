export const regs = {
  regEmail:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,
  regName: /^[A-Za-z]+([\s'-][a-zA-Z]+)*$/g,
};

export const validators = (value) => {
  const { regName, regEmail } = regs;
  const error = {};
  for (let key in value) {
    if (!value[key] ) {
      error[key] = "This field is required.";
    } else if (!regEmail.test(value[key]) && key === "email") {
      error[key] = "Please enter a valid email address.";
    } else if (!value[key].match(regName) && key === "name") {
      error[key] = "Name can not contain symbols and units.";
    } else if (value[key].length < 2 && key === "name") {
      error[key] = "The name should contain at least 2 characters.";
    } else if (value[key].length > 70 && key === "name") {
      error[key] = " The name should contain a max of 70 characters.";
    } else if (value[key].length < 15 && key === "message") {
      error[key] = "The message should contain at least 15 characters.";
    } else if (value[key].length > 500 && key === "message") {
      error[key] = " The message should contain a max of 500 characters.";
    }
  }
  return error;
};
