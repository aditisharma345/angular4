import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  imageurl =
    'https://tse2.mm.bing.net/th?id=OIP.0VtFarqAxKUjzx9tMdzn6AHaFj&pid=Api&P=0';
  backgroundcolor = 'underline;color:cornflowerblue;';
  data: any;
  size: any;
  target: any;

  click() {
    console.log('click');
  }
  dec() {
    this.size(-1);
    console.log('dec', this.size);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    console.log('inc', this.size);
  }
  inc() {
    this.size(+1);
  }
  clickmessage(event: any) {
    console.log('click', event);
    console.log('click', this.target.value);
  }

  constructor() {}

  ngOnInit(): void {}
  text: any;
  onChange(UpdatedValue: string): void {
    this.text = UpdatedValue;
  }

  searchvalue: string = 'iphone';
  changesearchvalue(dataevent: Event) {
    console.log((<HTMLInputElement>dataevent.target).value);
    this.searchvalue = (<HTMLInputElement>dataevent.target).value;
  }
}
