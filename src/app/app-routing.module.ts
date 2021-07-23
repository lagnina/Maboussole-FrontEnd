import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminGuard } from './_guards/admin.guard';
import { TestComponent } from './test/test.component';
import { PostCardComponent } from './post/post-card/post-card.component';
import {PostEditComponent} from './post/post-edit/post-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { ActualityListComponent } from './actuality/actuality-list/actuality-list.component';
import { ConseilListComponent } from './conseil/conseil-list/conseil-list.component';
import { ConseilCardComponent } from './conseil/conseil-card/conseil-card.component';
import { ActualityDetailComponent } from './actuality/actuality-detail/actuality-detail.component';
import { ConseilDetailComponent } from './conseil/conseil-detail/conseil-detail.component';
import { TagComponent } from './tag/tag.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Register', component: RegisterComponent},
  {path:'Actuality',component:ActualityListComponent},
  {path:'post/list',component: PostListComponent},

  {path:'Conseil-orientation',component:ConseilListComponent},




  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [ 
      {path: 'members/:username', component: MemberDetailComponent, resolve: {member: MemberDetailedResolver}},
      {path: 'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'Quiz',component: TestComponent},
      {path: 'post/create',component:PostCreateComponent, canDeactivate:[PreventUnsavedChangesGuard]},
      {path:'post/list',component: PostListComponent},
      {path:'Actuality/:id',component:ActualityDetailComponent},
      {path:'Conseil-Orientation/:id',component:ConseilDetailComponent},

      {path:'post/edit' ,component:PostEditComponent, canDeactivate:[PreventUnsavedChangesGuard]},
      {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
      {path:'Home', component:HomeComponent},
      {path:'Tags', component:TagComponent},
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//my rootes