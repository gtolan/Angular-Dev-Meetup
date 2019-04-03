import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/event.model";
// declare let toastr;

@Component({
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    // this.events = this.eventService.getEvents();
    //   handleEventClicked(data) {
    //     console.log(data, "from parent");
    //   }
  }
  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
    // this.eventService.getEvents().subscribe(events => (this.events = events));
  }
  // handleToastEvent(eventName) {
  //   this.toastr.success(eventName);
  // }
}
