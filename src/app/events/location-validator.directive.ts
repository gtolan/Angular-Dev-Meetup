import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: "[validateLocation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true
    }
  ]
})
export class LocationValidatorDirective implements Validator {
  validate(formGroup: FormGroup) {
    let addressControl = formGroup.controls["address"];
    let countryControl = formGroup.controls["country"];
    let cityControl = formGroup.controls["city"];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls["onlineUrl"];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
