import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersListComponent, UsersComponent]
})
export class UsersModule { }
