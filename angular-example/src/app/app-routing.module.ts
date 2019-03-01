import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HighlightComponent } from './components/highlight/highlight.component'
import { MultiplechoiceComponent } from './components/multiplechoice/multiplechoice.component'
import { PerformanceComponent } from './components/performance/performance.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'highlight', component: HighlightComponent },
  { path: 'multiplechoice', component: MultiplechoiceComponent },
  { path: 'performance', component: PerformanceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
