import Email  from "./Email";

class Maillist {
  emails: Email[];

  constructor(emails: Email[]) {
    this.emails = emails;
  }

  addEmail(email: Email) {
    this.emails.push(email);
  }

  getEmailByDest(destiny: string) {
    return this.emails.filter((email) => email.to === destiny)
  }

  getEmailBySender(sender: string) {
    return this.emails.filter((email) => email.from === sender)
  }
}

export default Maillist;
