export default class ErrorHandle {
  constructor(message) {
    this._template = {
      isSuccess: false,
      error: {
        message
      }
    }
  }

  toMessage() {
    return this._template;
  }
}