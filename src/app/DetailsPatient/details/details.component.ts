import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Nurse } from 'src/app/models/nurse.model';
import { Patient } from 'src/app/models/patient.model';
import { ApiNurseAssementService } from 'src/app/SERVICE/api-nurse-assement.service';
import { ApiPatientService } from 'src/app/SERVICE/api-patient.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  public UserID!: number 
  public NurseID!: number
  public userDetails!: Patient
  public nurseDetails!: Nurse

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiPatientService,
    private fb: FormBuilder,
    private api2: ApiNurseAssementService,
    private router: Router,
    private toastService: NgToastService
  ){}
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(val => {
      this.UserID = val['id'];
      this.fetchUserDetails(this.UserID);

    });
    this.activatedRoute.params.subscribe(val => {
      this.NurseID = val['id'];
      this.fetchNurseDetails(this.NurseID);

    });
  }
  fetchUserDetails(userID: number) {
    this.api.getRegisteredPatientId(userID).subscribe(res => {
      this.userDetails = res;
    })

  }
  fetchNurseDetails(nurseID: number) {
    this.api2.getRegisteredNurseId(nurseID).subscribe(res => {
      this.nurseDetails = res;
    })

  }
  

}
