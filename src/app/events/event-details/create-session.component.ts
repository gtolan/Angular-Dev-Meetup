import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../shared/event.model";
import { restrictedWords } from "../shared/restricted-words";

@Component({
  selector: "create-session",
  templateUrl: "create-session.component.html",
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
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  constructor() {}

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(["foo", "bar"])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
  saveSession(formValues) {
    console.log(formValues);
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      presenter: formValues.presenter,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }
  cancel() {
    this.cancelAddSession.emit();
  }

  //   private restrictedWords(words) {
  //     return (control: FormControl): { [key: string]: any } => {
  //       if (!words) return null;
  //       let invalidWords = words
  //         .map(w => (control.value.includes(w) ? w : null))
  //         .filter(w => w != null);
  //       return invalidWords && invalidWords.length > 0
  //         ? { restrictedWords: invalidWords.join(", ") }
  //         : null;
  //     };
  //   }
}
