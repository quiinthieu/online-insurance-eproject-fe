export class Result {
  private _result: string;


  constructor() {
  }

  get result(): string {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }
}
