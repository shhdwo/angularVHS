export class Tape {
  constructor(
    public id: number,
    public title: string,
    public year: number,
    public rating: number,
    public status: string,
    public borrower: string,
    public borrow_date: string,
    public image: string,
    public description: string,
  ) {  }
}
