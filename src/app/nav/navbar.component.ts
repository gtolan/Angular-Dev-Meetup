import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession } from "../events/shared/event.model";
import { EventService } from "../events/shared/event.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      li > a.active {
        color: orange;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `
  ]
})
export class NavbarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];
  auth;
  constructor(auth: AuthService, private eventService: EventService) {}
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
