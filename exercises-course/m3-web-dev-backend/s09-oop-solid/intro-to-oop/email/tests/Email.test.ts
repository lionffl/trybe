import { expect } from "chai";
import "mocha";
import Email from "../entities/Email";

describe('Email tests', () => {
  const emailObj = new Email('eu@email.com', 'vc@email.com', 'teste', 'Oi, esse eh um teste.');

  context('Email Class', () => {
    it('Can instance an object of Email Class', () => {
      expect(emailObj).to.be.instanceOf(Email);
    });
  })
  context('Objects from Email', () => {
    it('Instances of Email have "from" property', () => {
      expect(emailObj).to.haveOwnProperty('_from');
    });
    it('Instances of Email have "to" property', () => {
      expect(emailObj).to.haveOwnProperty('_to');
    });
    it('Instances of Email have "subject" property', () => {
      expect(emailObj).to.haveOwnProperty('_subject');
    });
    it('Instances of Email have "message" property', () => {
      expect(emailObj).to.haveOwnProperty('_message');
    });
  })
  context('Restrictions', () => {
    it('Subject from an email will not have more than 20 characteres', () => {
      const emailWithInvalidSubject = () => { new Email('eu@email.com', 'vc@email.com', 'aaaaaaaaaaaaaaaaaaaaaaa', 'sou um email de subject invalido') }
      expect(emailWithInvalidSubject).to.throw('subject max length is 20 characteres');
    });
  })

});