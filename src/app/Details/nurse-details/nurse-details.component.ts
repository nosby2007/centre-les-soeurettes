import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Patient } from 'src/app/models/patient.model';
import { ApiNurseAssementService } from 'src/app/SERVICE/api-nurse-assement.service';
import { ApiNurseService } from 'src/app/SERVICE/api-nurse.service';
import { ApiPatientService } from 'src/app/SERVICE/api-patient.service';

@Component({
  selector: 'app-nurse-details',
  templateUrl: './nurse-details.component.html',
  styleUrls: ['./nurse-details.component.css']
})
export class NurseDetailsComponent implements OnInit {
  public UserID!: number 
  public userDetails!: Patient
  hidden = false;
  nurseForm!: FormGroup
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiPatientService,
    private fb: FormBuilder,
    private api2: ApiNurseAssementService,
    private router: Router,
    private toastService: NgToastService

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.UserID = val['id'];
      this.fetchUserDetails(this.UserID);

    });

    this.nurseForm = this.fb.group({
      taille: [''],
      poids: [''],
      imc: [''],
      allergie: [''],
      température: [''],
      systole: [''],
      dyastole: [''],
      poul: [''],
      couleur: [''],
      scapula: [''],
      cou: [''],
      rythme: [''],
      saturation: [''],
      respiration: [''],
      glycemie: [''],
      sanguin: [''],
      habitudes: [''],
      status: [''],
      poidN: [''],
      cranien: [''],
      poignet: [''],
      poitrine: [''],
      brachiale: [''],
      hanche: [''],
      allergieq: [''],
      description: [''],
      severité: [''],
      reaction: [''],
      tabac: [''],
      alcool: [''],
      histoire: [''],
      bouteilles: [''],
      cigarettes: [''],
      chirurgie: [''],
      medicament: [''],
      observations: [''],
      note: [''],
      douleur: [''],
      radio: [''],
      date:[''],

    });
    this.nurseForm.controls[`taille`].valueChanges.subscribe(res=>{
      this.calculateImc(res);
    });
  }
  fetchUserDetails(userID: number) {
    this.api.getRegisteredPatientId(userID).subscribe(res => {
      this.userDetails = res;
    })

  }

  save() {
    this.api2.postRegistration(this.nurseForm.value).subscribe(res => {
      this.toastService.success({ detail: "success", summary: "Consultation Infirmière Terminée", duration: 3000 });
      this.nurseForm.reset();
      this.router.navigate(['nurse'])
    });
  }
  submit(){}
  edit() { }

  delete() { }

  calculateImc(tailleValue: number) {
    const poids = this.nurseForm.value.poids;
    const taille = tailleValue;
    const imc = poids / (taille * taille);
    this.nurseForm.controls[`imc`].patchValue(imc);

    /* switch (true) {
       case bmi < 18.5:
         this.nurseForm.controls[`bmiResult`].patchValue("Underweight");
         break;
       case ( bmi >= 18.5 && bmi < 25):
         this.nurseForm.controls[`bmiResult`].patchValue("Normal");
         break;
       case bmi >= 25 && bmi <30:
         this.nurseForm.controls[`bmiResult`].patchValue("Overrweight");
         break;
     
       default:
         this.nurseForm.controls[`bmiResult`].patchValue("Obese");
         break;
     }*/

  }
}