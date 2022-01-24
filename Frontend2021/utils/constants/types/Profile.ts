export default class Profile {
  name;

  email;

  profilePicture;

  department;

  fullAuthorization;

  constructor(
    name: string,
    email: string,
    profilePicture: string,
    department: string,
    fullAuthorization: boolean,
  
  ) {
    this.name = name;
    this.email = email;
    this.profilePicture = profilePicture;
    this.department = department;
    this.fullAuthorization = fullAuthorization;
  }
}
