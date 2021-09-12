import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Member } from '../_models/member';
import { User } from '../_models/user';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: User;
  model: any;
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;
  fileToUpload: File | null = null;

  maxDate: Date;
  validationErrors: string[] = [];
  
  store: any;

  constructor(private accountService: AccountService, private toastr: ToastrService, 
    private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.intitializeForm();
   this.maxDate = new Date();
   this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }

  intitializeForm() {
    this.registerForm = this.fb.group({
     gender: ['male'],
      username: ['Le nom d\'utilisateur', Validators.required],
     email: ['Email', Validators.required],
     dateOfBirth: ['01/01/2000', Validators.required],
     city: ['Ville', Validators.required],
      country: ['Pays', Validators.required],
      password: ['\Mot de passe', [Validators.required, 
        Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['Confirmation de mot de passe', [Validators.required, this.matchValues('password')]]
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value 
        ? null : {isMatching: true}
    }
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl('Home');
    }, error => {
      this.validationErrors = error;
    })
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
