import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { TestComponent } from './test/test.component';
import { PostCardComponent } from './post/post-card/post-card.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { MatChipsModule } from '@angular/material/chips';

import {
  MatSliderModule
} from "@angular/material/slider";
import {
  MatButtonModule
} from "@angular/material/button";
import {
  MatToolbarModule
} from "@angular/material/toolbar";
import {
  MatIconModule
} from "@angular/material/icon";
import {
  MatSidenavModule
} from "@angular/material/sidenav";
import {
  MatListModule
} from "@angular/material/list";
import {
  MatDividerModule
} from "@angular/material/divider";
import {
  MatInputModule
} from "@angular/material/input";
import {
  MatSnackBarModule
} from "@angular/material/snack-bar";
import {
  MatGridListModule
} from "@angular/material/grid-list";
import {
  MatProgressBarModule
} from "@angular/material/progress-bar";
import {
  MatCardModule
} from "@angular/material/card";
import {
  MatSelectModule
} from "@angular/material/select";



import { ActualityListComponent } from './actuality/actuality-list/actuality-list.component';
import { ActualityCardComponent } from './actuality/actuality-card/actuality-card.component';
import { ConseilListComponent } from './conseil/conseil-list/conseil-list.component';
import { ConseilCardComponent } from './conseil/conseil-card/conseil-card.component';
import { ActualityDetailComponent } from './actuality/actuality-detail/actuality-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TextInputComponent,
    DateInputComponent,
    MemberMessagesComponent,
    AdminPanelComponent,
    HasRoleDirective,
    UserManagementComponent,
    PhotoManagementComponent,
    RolesModalComponent,
    ConfirmDialogComponent,
    TestComponent,
    PostCardComponent,
    PostEditComponent,
    PostListComponent,
    PostCreateComponent,
    ActualityListComponent,
    ActualityCardComponent,
    ConseilListComponent,
    ConseilCardComponent,
    ActualityDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    

    MatChipsModule,
    MatSelectCountryModule.forRoot('de')
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
