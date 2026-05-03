const successResponse = (data, message) => {
    return {
        status: 'success',
        message,
        data: data
    };
}

const errorResponse = (message) => {
    return {
        status: 'error',
        message: message
    };
}

export { successResponse, errorResponse };