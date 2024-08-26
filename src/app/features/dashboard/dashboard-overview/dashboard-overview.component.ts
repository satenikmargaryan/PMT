import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MatProgressBarModule
  ]
})
export class DashboardOverviewComponent implements OnInit {
  activeProjects = 5;
  totalTasks = 120;
  upcomingDeadlines = 3;
  teamMembers = 8;

  recentActivities = [
    { description: 'Task "Design UI" completed' },
    { description: 'New project "Marketing Campaign" created' },
    { description: 'Team member "John Doe" joined project' },
  ];

  tasks = {
    todo: 30,
    inProgress: 50,
    completed: 40
  };

  taskCompletion = (this.tasks.completed / this.totalTasks) * 100;

  constructor() {}

  ngOnInit(): void {}
}
