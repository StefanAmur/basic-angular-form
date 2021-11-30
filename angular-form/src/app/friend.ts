export class Friend {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    language: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.language = language;
  }
}
