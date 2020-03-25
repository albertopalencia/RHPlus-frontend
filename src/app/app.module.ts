import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { CandidateService } from './services/candidate.service';
import { ReactiveFormsModule} from '@angular/forms';
import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';
import { DemandeDocComponent } from './components/employe-components/demande-doc/demande-doc.component';
import { CongeCalendarComponent } from './components/admin-components/conge-calendar/conge-calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PresenceComponent } from './components/admin-components/presence/presence.component';
import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { TodoListComponent } from './components/admin-components/todos/todo-list/todo-list.component';
import { MatDialogModule, } from '@angular/material/dialog';
import { TodoService } from './services/todo.service';
import { ProfileEmployeComponent } from './components/employe-components/profile-employe/profile-employe.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
import { CongeComponent } from './components/admin-components/conge/conge.component';
import { ProfilsComponent } from './components/admin-components/profils/profils.component';
import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { EmailService } from './services/email.service';
import { MatIconModule, MatButtonModule, MatInputModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { CaisseComponent } from './components/admin-components/caisse/caisse.component';
import { AjoutNoteComponent } from './components/admin-components/notes/ajout-note/ajout-note.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { AddPresenceComponent } from './components/employe-components/add-presence/add-presence.component';
import { AddTodoComponent } from './components/admin-components/todos/add-todo/add-todo.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { MeetingComponent } from './components/admin-components/meetings/meeting/meeting.component';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddEmployeComponent,
    ContentComponent,
    InfoCandidateComponent,
    DemandeCongeComponent,
    DemandeDocComponent,
    CongeCalendarComponent,
    PresenceComponent,
    ListEmployesComponent,
    TodoListComponent,
    ProfileEmployeComponent,
    UpdateEmployeComponent,
    CongeComponent,
    ProfilsComponent,
    RecrutementsComponent,
    NotesInternesComponent,
    AjoutNoteComponent,
    CaisseComponent,
    TimetrackingComponent,
    AddPresenceComponent,
    AddTodoComponent,
    MeetingComponent,
    ListMeetingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    //LoginComponent,
    //RegisterComponent,
    //HomeComponent,
  
 
  
    
 
  ],
  imports: [
    MatDialogModule,
    ScheduleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule
    
  ],
  providers: [EmployeService,CandidateService,TodoService,EmailService,authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents:[AjoutNoteComponent,AddTodoComponent,MeetingComponent]
})
export class AppModule { }
