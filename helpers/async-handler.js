function asyncHandler(fn) {
  return async (...args) => {
    const next = args[args.length - 1];
    try {
      await fn(...args);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = asyncHandler;
