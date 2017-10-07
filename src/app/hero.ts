export class Hero {
    constructor(private _id?: number, private _name?: string) {
    }

  public set ID(value: number) {
      this._id = value;
  }
  public get ID() {
      return this._id;
  }

  public set Name(value: string) {
      this._name = value;
  }

  public get Name() {
      return this._name;
  }
}
