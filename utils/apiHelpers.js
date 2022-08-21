module.exports = {
  apiSuccessWithData: (message, data) => {
    const res = {
      status: true,
      message: message,
      data: data,
    };
    return res;
  },
  apiSuccess: (message) => {
    const res = {
      status: true,
      message: message,
    };
    return res;
  },
  apiError: (message) => {
    const res = {
      status: false,
      message: message,
    };
    return res;
  },

  apiValidationErrors: (errors) => {
    const res = {
      status: false,
      message: "Validation errors",
      data: errors,
    };
    return res;
  },
};
