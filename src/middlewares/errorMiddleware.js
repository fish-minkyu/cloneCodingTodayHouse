class CustomError extends Error {
  constructor(message, status) {
    super(); // 상속 할 땐 super() 호출 해야함
    this.message = message;
    this.status = status;
  }
}

module.exports = CustomError;
