export default class ErrorResponse extends Error {
  public statusCode;
  public value;
  public errors: Error[];
  public code: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
