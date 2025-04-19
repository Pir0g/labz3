import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  title = "contacts";
  amount: number;

  constructor(private activeRoute: ActivatedRoute)
  {
    this.amount = activeRoute.snapshot.params['value'];
  }
}
