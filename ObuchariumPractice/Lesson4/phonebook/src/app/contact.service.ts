import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Contact } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  private contactsUrl = 'http://localhost:9090/api/contacts';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
    .pipe(
        tap(contacts => this.log('fetched contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => this.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, this.httpOptions).pipe(
        tap(_ => this.log(`updated contact id=${contact.id}`)),
        catchError(this.handleError<any>('updateContact'))
      );
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, this.httpOptions).pipe(
        tap((c: Contact) => this.log(`added contact w/ id=${contact.id}`)),
        catchError(this.handleError<Contact>('addContact'))
      );
  }

  deleteContact(contact: Contact) {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ContactsService: ${message}`);
  }
}
