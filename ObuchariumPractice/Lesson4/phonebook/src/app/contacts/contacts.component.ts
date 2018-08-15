import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  selectedContact: Contact;
  newContact: Contact;

<<<<<<< HEAD
  constructor(private contactService: ContactService) { }
=======
  onSelect(contact: Contact): void {
    this.newContact = null;
    this.selectedContact = contact;
  }
>>>>>>> 1e9d6a62e710f4049083472da08b2f5f2580d802

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onSelect(contact: Contact): void {
    this.newContact = null;
    this.selectedContact = contact;
  }

  onAdding(): void {
    this.selectedContact = null;
    this.newContact = new Contact();
  }

  onRefresh(): void {
    this.getContacts();
  }
}
