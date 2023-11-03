interface ILogin {
  email: string;
  password: string;
}

interface IRegister extends ILogin {
  confirm_password: string;
}
