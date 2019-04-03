import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventListResolver,
  EventDetailsComponent,
  EventRouteActivator,
  CreateSessionComponent,
  SessionsListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidatorDirective,
  DurationPipe
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavbarComponent } from "./nav/navbar.component";
import {
  TOASTR_TOKEN,
  Toastr,
  SimpleModalComponent,
  JQUERY_TOKEN,
  CollapsibleWellComponent,
  ModalTriggerDirective
} from "./common/index";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";

let toastr: Toastr = window["toastr"];
let jQuery = window["$"];
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidatorDirective,
    UpvoteComponent
  ],
  providers: [
    EventService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("Are you sure you want to leave?");
  } else {
    return true;
  }
}
