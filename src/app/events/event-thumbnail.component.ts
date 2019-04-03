import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./shared/index";
@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div
        [class.green]="event?.time === '8:00 am'"
        [ngClass]="{
          green: event?.time === '8:00 am',
          bold: event?.time === '8:00 am'
        }"
      >
        Time: {{ event?.time }}
      </div>
      <div [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early start</span>
        <span *ngSwitchCase="'10:00 am'">Late start</span>
        <span *ngSwitchDefault>Normal start</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>

        <span class="pad-left" [hidden]="!event?.location?.country"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      .green {
        color: green !important;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
    `
  ]
})

//   <button class="btn btn-primary" (click)="handleClickMe()">
//     Click
//   </button>
export class EventThumbnailComponent {
  @Input() event: IEvent;
  //   @Output() eventClick = new EventEmitter();

  //   handleClickMe() {
  //     console.log("clicked");
  //     this.eventClick.emit(this.event.name);
  //   }
  someProperty: any = "someProperty";
  logFoo() {
    console.log("FOO--");
  }

  getStartTimeClass() {
    const isEarly = this.event && this.event.time === "8:00 am";
    return { green: isEarly, bold: isEarly };
    //return 'green bold' //other option
  }

  //[ngStlye]="getStartTimeStyle()"
  getStartTimeStyle() {
    if (this.event && this.event.time === "8:00 am")
      return { color: "green", "font-weight": "bold" };
    return {};
  }
}
