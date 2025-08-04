interface IToken {
  generate(): Promise<string>;
  isValidToken(): Promise<boolean>;
}

export { IToken }
