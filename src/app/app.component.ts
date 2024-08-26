import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardOverviewComponent } from './features/dashboard/dashboard-overview/dashboard-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-management-tool';
}
