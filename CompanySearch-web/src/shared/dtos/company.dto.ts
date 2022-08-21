export class CompanyDto {
  constructor(
    public name: string,
    public country: string,
    public currency: string,
    public weburl: string,
    public ticker: string
  ) {}
}
