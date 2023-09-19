import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';



@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    QuestionnaireComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
