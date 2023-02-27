import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authification/login/login.component';
import { LogoutComponent } from './Authification/logout/logout.component';
import { RegisterComponent } from './Authification/register/register.component';
import { MedstockComponent } from './Component/medstock/medstock.component';
import { ReceptionformComponent } from './Component/receptionform/receptionform.component';
import { DoctorComponent } from './Dashboard/doctor/doctor.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { NurseComponent } from './Dashboard/nurse/nurse.component';
import { PharmacieComponent } from './Dashboard/pharmacie/pharmacie.component';
import { ReceptionComponent } from './Dashboard/reception/reception.component';
import { TreatmentRoomComponent } from './Dashboard/treatment-room/treatment-room.component';
import { DetailsComponent } from './DetailsPatient/details/details.component';

const routes: Routes = [
  {path:'reception', component:ReceptionformComponent},
  {path:'receptionBord', component:ReceptionComponent},
  {path:'nurse', component:NurseComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'pharmacy', component:PharmacieComponent},
  {path:'stock', component:MedstockComponent},
  {path:'treatment', component:TreatmentRoomComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'update/:id', component:ReceptionformComponent},
  {path:'updateEmployee/:id', component:RegisterComponent},
  {path:'updateStock/:id', component:MedstockComponent},
  {path:'detail/:id', component:DetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
