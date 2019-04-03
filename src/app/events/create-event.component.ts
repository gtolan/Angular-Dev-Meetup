import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";
@Component({
  selector: "selector-name",
  templateUrl: "./create-event.component.html",
  styles: [
    `
      em {
        float: right;
        color: orange;
        padding-left: 10px;
      }
      .error input,
      .error textarea,
      .error select {
        background-color: red;
      }
    `
  ]
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent;
  event;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.event = {
      name: "NGSpectacular ",
      date: "8/8/2019",
      time: "10 am",
      price: "900",
      location: {
        address: "42 Pearse St",
        city: "Dublin",
        country: "Ireland"
      },
      onlineUrl: "http://angualrspectacnew.com",
      imageUrl: "http://ngspecaas/img.png"
    };
  }
  cancel() {
    this.router.navigate(["/events"]);
  }
  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);
  }
}
