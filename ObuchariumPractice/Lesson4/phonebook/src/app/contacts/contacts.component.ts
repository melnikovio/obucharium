import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = CONTACTS[0];

  contacts = CONTACTS;

  selectedContact: Contact;
  newContact: Contact;

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  onDelete(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    this.selectedContact = null;
  }

  onAdding(): void {
    this.selectedContact = null;
    this.newContact = new Contact();
  }

  onAdd(contact: Contact): void {
    this.contacts.push(contact);
    this.newContact = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
