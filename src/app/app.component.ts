import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  componentName = 'app';
  displayLoadingIndicator = false;
  static componentName(componentName: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.displayLoadingIndicator = false;
      }
      this.myobservable.subscribe((value) => {
        console.log(value);
      });
    });
  }

  title = 'my-third-project';
  myobservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next('1');
      observer.next('2');
      observer.next('3');
    }, 2000);
  });
}
/*  */
