import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated //by default
  encapsulation: ViewEncapsulation.None // makes the comp not to use View Encapsulation
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
