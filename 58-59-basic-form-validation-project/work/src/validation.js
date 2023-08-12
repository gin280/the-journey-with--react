export const validateEmail = (email) => {
  const errors = [];
  if (!email) {
    errors.push("Email is required");
  }

  if (!email.endsWith("@webdevsimplified.com")) {
    errors.push("Must end with @webdevsimplified.com");
  }

  return errors;
};

export const validatePassword = (password) => {
  const errors = [];
  if (!password) {
    errors.push("Password is required");
  }

  if (password.length < 10) {
    errors.push("Password must be at least 10 characters");
  }

  if (!password.match(/[A-Z]/g)) {
    errors.push("Password must contain an uppercase letter");
  }

  if (!password.match(/[a-z]/g)) {
    errors.push("Password must contain a lowercase letter");
  }

  if (!password.match(/[0-9]/g)) {
    errors.push("Password must contain a number");
  }

  return errors;
};
