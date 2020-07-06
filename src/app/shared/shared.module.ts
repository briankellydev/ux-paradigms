import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserChipComponent } from './components/user-chip/user-chip.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [HeaderComponent, UserChipComponent, NotificationModalComponent, LoadingComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatMenuModule,
    RouterModule,
    MatBadgeModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    UserChipComponent,
    LoadingComponent
  ],
  entryComponents: [
    NotificationModalComponent
  ]
})
export class SharedModule { }
