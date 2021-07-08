import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoaderComponent } from "./loader/loader.component";
import { PasswordMatchDirective } from "./directives/password-match.directive";
import { SubstringPipe } from "./pipes/substring.pipe";
import { ToDatePipe } from './pipes/toDate.pipe';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [LoaderComponent, PasswordMatchDirective, SubstringPipe, ToDatePipe],
  imports: [CommonModule, RouterModule,MatChipsModule],
  exports: [LoaderComponent, PasswordMatchDirective, SubstringPipe, ToDatePipe],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class SharedModule {}
