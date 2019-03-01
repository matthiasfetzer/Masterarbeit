import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { MultiplechoiceComponent } from './components/multiplechoice/multiplechoice.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { AppConstantsModule } from './app-constants.module';
import { CanvasComponent } from './components/highlight/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighlightComponent,
    MultiplechoiceComponent,
    PerformanceComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConstantsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
