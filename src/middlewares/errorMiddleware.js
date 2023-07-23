class CustomError extends Error {
  constructor(message, status) {
    super(); // 상속 할 땐 super() 호출 해야함
    this.status = status;
    this.message = message;
  }
}

module.exports = CustomError;
