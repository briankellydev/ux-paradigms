import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone, faInfoCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ICONS = {
    EMAIL: faEnvelope,
    PHONE: faPhone,
    INFO: faInfoCircle,
    PENCIL: faPencilAlt
  };

  directReports = [
    {
      firstName: 'Grand Moff',
      lastName: 'Tarkin',
      initials: 'GT'
    },
    {
      firstName: 'Storm',
      lastName: 'Trooper',
      initials: 'ST'
    },
    {
      firstName: 'Imperial',
      lastName: 'Guard',
      initials: 'IG'
    },
    {
      firstName: 'Death',
      lastName: 'Trooper',
      initials: 'DT'
    },
    {
      firstName: 'Sand',
      lastName: 'Trooper',
      initials: 'ST'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
