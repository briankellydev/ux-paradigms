import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { NotificationModalComponent } from '../notification-modal/notification-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggled = new EventEmitter();

  ICONS = {
    HAMBURGER: faBars,
    BELL: faBell
  };

  notifications = [
    {
      title: 'Intruders in Detention Level',
      description: 'They\'re after the princess!'
    },
    {
      title: 'You Killed Padme',
      description: 'It appears that you killed Padme.'
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuToggled.emit();
  }

  openModal() {
    this.dialog.open(NotificationModalComponent, {data: this.notifications});
  }

}
