import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { ReceptionformComponent } from './Component/receptionform/receptionform.component';
import { MedstockComponent } from './Component/medstock/medstock.component';
import { NurseComponent } from './Dashboard/nurse/nurse.component';
import { ReceptionComponent } from './Dashboard/reception/reception.component';
import { DoctorComponent } from './Dashboard/doctor/doctor.component';
import { PharmacieComponent } from './Dashboard/pharmacie/pharmacie.component';
import { TreatmentRoomComponent } from './Dashboard/treatment-room/treatment-room.component';
import { DetailsComponent } from './DetailsPatient/details/details.component';
import { LoginComponent } from './Authification/login/login.component';
import { LogoutComponent } from './Authification/logout/logout.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { AssesmentComponent } from './Dashboard/assesment/assesment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionformComponent,
    MedstockComponent,
    NurseComponent,
    ReceptionComponent,
    DoctorComponent,
    PharmacieComponent,
    TreatmentRoomComponent,
    DetailsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    AssesmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule,
    MatProgressBarModule,

    NgToastModule,
    NgConfirmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
