import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private messageService: MessageService) { }

  getContacts(): Observable<Contact[]> {
    this.messageService.add('ContactsService: fetched contacts');
    return of(CONTACTS);
  }

  addContact(contact: Contact) {
    CONTACTS.push(contact);
    this.messageService.add('ContactsService: contact added');
  }

  deleteContact(contact: Contact) {
    const index = CONTACTS.indexOf(contact);
    if (index > -1) {
        CONTACTS.splice(index, 1);
        this.messageService.add('ContactsService: contact deleted');
    } else {
        this.messageService.add('ContactsService: contact not found');
    }
  }
}
