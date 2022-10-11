class Email {
  private _from: string;
  private _to: string;
  private _subject: string;
  private _message: string;

  constructor(from: string, to: string, subject: string, message: string) {
    this.checkSubject(subject);
    this._from = from;
    this._subject = subject;
    this._to = to;
    this._message = message;
  }

  get subject() {
    return this._subject
  }

  get from() {
    return this._from
  }

  get to() {
    return this._to
  }
  
  set subject(subject: string) {
    if (subject.length > 20) {
      throw new Error('subject max length is 20 characteres');
    } else {
      this._subject = subject;
    }
  }

  private checkSubject(subject: string) {
    if (subject.length > 20) {
      throw new Error('subject max length is 20 characteres');
    } else {
      this._subject = subject;
    }
  }
  get email() {
    return `From: ${this._from}, To: ${this._to}, Subject: ${this._subject}, Message: ${this._message}`;
  }
}

export default Email;