import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  onAdd(value: Contact): void {
    this.contactService.addContact(value).subscribe();
    this.goBack();
  }

  onUpdate(value: Contact): void {
    this.contactService.updateContact(value).subscribe();
    this.goBack();
  }

  onDelete(value: Contact): void {
    this.contactService.deleteContact(value).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
