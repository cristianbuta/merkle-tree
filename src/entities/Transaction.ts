class Transaction {
  readonly data: string;
  constructor(data: string) {
    this.data = `
        timestamp: ${Date.now()}
        data: ${data}
    `;
  }
}
