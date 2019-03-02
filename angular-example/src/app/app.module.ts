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
import { FormsModule } from '@angular/forms';
import { Performance_canvasComponent } from './components/performance/performance_canvas.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighlightComponent,
    MultiplechoiceComponent,
    PerformanceComponent,
    CanvasComponent,
    Performance_canvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConstantsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
