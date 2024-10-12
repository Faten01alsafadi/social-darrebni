import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
    });
  }

  ngOnInit() {
  
  }

  onSubmit() {
    if (this.form.valid) {
      // تنفيذ عملية تسجيل الدخول
    } else {
      this.form.markAllAsTouched(); // هذا سيسمح بعرض جميع الأخطاء
    }
  }
  shouldShowErrorMessages() {
    return this.form.invalid && (this.form.get('email')?.touched || this.form.get('password')?.touched);
  }
}
