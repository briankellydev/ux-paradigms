import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss']
})
export class DashboardLandingComponent implements OnInit {

  alerts = [
    {
      title: 'Droids On The Fritz',
      description: 'Several of the droids have formed a labor union and gone on strike.',
      reportedBy: 'Storm Trooper',
      time: '1/23/45 12:03 PM'
    },
    {
      title: 'Trash Compactor Damaged',
      description: 'Blaster bolt marks were found in the non-functional trash compactor',
      reportedBy: 'Janitor Steve',
      time: '1/19/45 5:08 PM'
    },
    {
      title: 'Broken Coffee Machine',
      description: 'The Emperor\'s coffee machine has broken... again...',
      reportedBy: 'Imperial Guard',
      time: '1/27/45 8:30 AM'
    },
    {
      title: 'Ewok Infestation',
      description: 'I can\'t work with all these damn Ewoks in the level 4 bathrooms.',
      reportedBy: 'Janitor Steve',
      time: '1/04/45 11:13 AM'
    },
    {
      title: 'Your Kids Are Incestuous',
      description: 'I saw Luke and Leia kissing. You might need to call the therapist again.',
      reportedBy: 'Anonymous',
      time: '1/23/45 4:45 PM'
    },
  ];
  columnKeys = [
    'title',
    'description',
    'reportedBy',
    'time'
  ];
  columnLabels = [
    'Title',
    'Description',
    'Reported By',
    'Timestamp'
  ];

  laborData = [
    ['Jun', 13],
    ['Jul', 18],
    ['Aug', 15],
    ['Sep', 22],
  ];
  laborColumns = ['Month', '%'];
  laborOptions = {
    backgroundColor: '#303030',
    colors: ['#ba0018'],
    hAxis: {
      gridlines: {
        color: 'white'
      },
      minorGridlines: {
        color: 'white'
      },
      textStyle: {
        color: 'white'
      }
    },
    vAxis: {
      textStyle: {
        color: 'white'
      }
    }
  };

  satisfactionData = [
    ['Facilities', 65],
    ['R&D', 43],
    ['Marketing', 22],
    ['Corrections', 95],
    ['Militia', 98],
    ['Executive', 100],
  ];
  satisfactionColumns = ['Department', '%'];

  pieData = [
    ['Days Since']
  ];

  opacities = [0, 0, 0, 0];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.opacities[0] = 1;
    });
    setTimeout(() => {
      this.opacities[1] = 1;
    }, 200);
    setTimeout(() => {
      this.opacities[2] = 1;
    }, 400);
    setTimeout(() => {
      this.opacities[3] = 1;
    }, 600);
  }

}
