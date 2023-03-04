import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Patient } from 'src/app/models/patient.model';
import { ApiNurseService } from 'src/app/SERVICE/api-nurse.service';
import { ApiPatientService } from 'src/app/SERVICE/api-patient.service';

@Component({
  selector: 'app-nurse-details',
  templateUrl: './nurse-details.component.html',
  styleUrls: ['./nurse-details.component.css']
})
export class NurseDetailsComponent implements OnInit { public UserID!: number
  allergies: string[] = [
    'Latex',
    'oleagineux',
    'Oeufs',
    'gluten',
    'Medicament',
  ];
  allergieQ: string[] = [
    'OUI',
    'NON',
    'JE NE SAIS PAS',
  ];
  tabac: string[] = [
    'OUI',
    'NON',
  ];
  alcool: string[] = [
    'OUI',
    'NON',
  ];
  severity: string[] = [
    'FAIBLE',
    'MODEREE',
    'ELEVEE',
  ];
  couleurYeux: string[] = [
    'Colorés',
    'pas Colorés',
  ];
  rhytme: string[] = [
    'regulier',
    'irrégulier',
  ];
  groupeSang: string[] = [
    'A',
    'B',
    'O',
    'AB',
    'A-',
    'B-',
    'O-',
    'AB-',
  ];
  statusM: string[] = [
    'Marié(e)',
    'Celibataire',
    'En couple',
  ];
  public userDetails!: Patient
  hidden = false;
  nurseForm!: FormGroup

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(
    private activatedRoute:ActivatedRoute, 
    private api: ApiPatientService,
    private fb:FormBuilder,
    private api2: ApiNurseService,
    private router:Router, 
    private toastService:NgToastService  
    
    ){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  });

  this.nurseForm = this.fb.group({
    taille: [''],
    poids: [''],
    imc: [''],
    allergie: [''],
    température: [''],
    systole:[''],
    dyastole: [''],
    poul: [''],
    couleur: [''],
    cou: [''],
    rythme: [''],
    saturation: [''],
    respiration:[''],
    glycémie:[''],
    sanguin:[''],
    habitudes:[''],
    status:[''],
    poidN:[''],
    cranien:[''],
    poignet:[''],
    poitrine:[''],
    brachiale:[''],
    hanche:[''],
    allergieQ:[''],
    description:[''],
    severité:[''],
    reaction:[''],
    tabac:[''],
    alcool:[''],
    histoire:[''],
    bouteilles:[''],
    cigarettes:[''],
    chirurgie:[''],
    medicament :[''],
    observations:[''],
    note:[''],
    douleur:[''],
    radio:[''],

  });
}

  fetchUserDetails(userID:number){
    this.api.getRegisteredPatientId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    
  }
  save(){
  this.api.postRegistration(this.nurseForm.value).subscribe(res=>{
    this.toastService.success({detail:"success", summary:"Professionel Ajouté avec success", duration:3000});
    this.nurseForm.reset();
    this.router.navigate(['receptionBord'])

    
  });
}

}