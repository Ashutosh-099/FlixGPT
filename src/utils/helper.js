export const validateEmail = (emailId) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    emailId
  );

  return isEmailValid;
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  return isPasswordValid;
};

export const validateName = (name) => {
  const isNameValid = /^[a-zA-Z\s]+$/.test(name);

  return isNameValid;
};

export const validateLogInForm = (emailId) => {
  if (emailId === "" || !validateEmail(emailId))
    return "Enter correct email address";
  return undefined;
};

export const validateSignUpForm = (name, emailId, password) => {
  if (name === "" || !validateName(name))
    return "Ensure the name contains only characters.";
  if (emailId === "" || !validateEmail(emailId))
    return "Enter correct email address";
  if (password === "" || !validatePassword(password))
    return "Ensure the password is at least 8 character long, containing at least one lowercase letter, one uppercase letter, one digit and one special character[@$!%*?&]";
  return undefined;
};

export function createContextData(initialValue) {
  let value = initialValue;

  return {
    getValue: () => value,
    setValue: (newValue) => {
      value = newValue;
    },
  };
}
