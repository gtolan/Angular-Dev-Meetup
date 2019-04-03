import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

@Component({
  selector: "upvote",
  styleUrls: ["./upvote.component.css"],
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="well voting-widget">
        <div class="voting-button">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse voting-count">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? "red" : "white";
  }
  @Output() vote = new EventEmitter();
  iconColor: string;
  constructor() {}

  ngOnInit() {}
  onClick() {
    this.vote.emit({});
  }
}
