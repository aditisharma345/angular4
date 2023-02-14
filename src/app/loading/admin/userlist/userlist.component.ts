import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  /*  componentName = 'user'; */

  users: any;
  constructor(private userdata: ServicesService) {
    this.userdata.users().subscribe((data) => {
      console.log(data);
      this.users = data;
      console.log('sdsdsds', this.users.entries);
    });
  }
}
