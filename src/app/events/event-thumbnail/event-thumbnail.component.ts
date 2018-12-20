import { Component, OnInit , Input } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`.thumbnail {min-height: 210px;}
  .pad-left{ margin-left: 10px;}
  .well div { color: #bbb;}`]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  constructor() { }

  ngOnInit() {
  }

}
