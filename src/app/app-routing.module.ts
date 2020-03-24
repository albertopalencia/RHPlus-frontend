import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
//import { LoginComponent } from './login/login.component';
import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';
import { CongeCalendarComponent } from './components/admin-components/conge-calendar/conge-calendar.component';
import { PresenceComponent } from './components/admin-components/presence/presence.component';
import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { TodoListComponent } from './components/admin-components/todos/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEmployeComponent } from './components/employe-components/profile-employe/profile-employe.component';
import { CongeComponent } from './components/admin-components/conge/conge.component';
import { ProfilsComponent } from './components/admin-components/profils/profils.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';
import { CaisseComponent } from './components/admin-components/caisse/caisse.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';





const routes: Routes = [

  //{ path: '', component: LandingPageComponent},
  { path: 'addEmploye', component: AddEmployeComponent },
  { path: 'demandeConge', component: DemandeCongeComponent }, 
  //{ path: 'login', component: LoginComponent },
  //{path:'', component:InfoCandidateComponent},
  { path: 'congeCalendar', component: CongeCalendarComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'listEmployes', component: ListEmployesComponent },
  { path: 'todoList', component: TodoListComponent },
  //{ path: 'listEmployes/profilEmploye/:idUser', component: ProfileEmployeComponent },
  { path: 'profilEmploye/:id', component: ProfileEmployeComponent },
  { path: 'congeComponent', component: CongeComponent },
  { path: 'congeComponent', component: CongeComponent },
  { path: 'profil', component: ProfilsComponent },
  { path: 'notesInternes', component: NotesInternesComponent },
  { path: 'recrutement', component: RecrutementsComponent },
  { path: 'profilEmploye/:id', component: CaisseComponent },
  { path: 'timetracking', component: TimetrackingComponent },
  { path: 'meetings', component: ListMeetingComponent },

  
  /*{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
