import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('test@email.com', {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      // address: new FormGroup({
      //   city: new FormControl(),
      //   pincode: new FormControl(null, [this.zipcodeValidator()]),
      // }),
      address: new FormArray([]),
    },
    // { updateOn: 'submit' },
    { updateOn: 'change' },
    
  );

  // it act as a property/variable not as a function
  get addressObj() {
    return this.checkoutForm.get('address') as FormArray;
  }

  newAddress() {
    return new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(null, [this.zipcodeValidator()]),
    });
  }

  addAddress() {
    this.addressObj.push(this.newAddress());
  }

  removeAddress(index: number) {
    this.addressObj.removeAt(index);
  }

  zipcodeValidator() {
    return (control: AbstractControl) => {
      if (control.value == 123456) {
        // valid
        return null;
      }
      // invalid
      return {
        // name_of_error:information_related_to_error
        zipcode: {
          validCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }

  submitForm() {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {
      console.log('form submission logic', this.checkoutForm.value);
    }
  }

  loadData() {
    const data = {
      name: 'rahul',
      email: 'rahul@email.com',
      address: {
        city: 'city',
        pincode: 123456,
      },
    };
    this.checkoutForm.setValue(data); // all data
  }

  patchData() {
    const data = { name: 'john', email: 'john@email.com' };
    this.checkoutForm.patchValue(data); // partial data
  }
}
