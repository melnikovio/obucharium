import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onAdd(value: Contact): void {
    this.contactService.addContact(value);
    this.clearForm();
  }

  onDelete(value: Contact): void {
    this.contactService.deleteContact(value);
    this.clearForm();
  }

  private clearForm(): void {
    this.contact = null;
  }
}
