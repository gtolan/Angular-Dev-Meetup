import { Component, OnInit, Input } from "@angular/core";
import { ISession } from "../shared/event.model";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
@Component({
  selector: "sessions-list",
  templateUrl: "./sessions-list.component.html"
})
export class SessionsListComponent implements OnInit {
  @Input() sessions: ISession[];
  @Input() visibleSessions: ISession[] = [];
  @Input() filterBy: string;
  @Input() sortBy: string;
  constructor(private auth: AuthService, private voterService: VoterService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotes);
    }
  }
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === "votes") {
      // this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }
  filterSessions(filter) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}
function sortByVotes(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
function sortByVotesDesc() {}
