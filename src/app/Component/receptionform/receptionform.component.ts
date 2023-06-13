import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Patient } from 'src/app/models/patient.model';
import { ApiPatientService } from 'src/app/SERVICE/api-patient.service';

@Component({
  selector: 'app-receptionform',
  templateUrl: './receptionform.component.html',
  styleUrls: ['./receptionform.component.css']
})
export class ReceptionformComponent implements OnInit{

  profession: string[] = [
    'CONSULTATION',
    'CPN',
    'RENDEZ-VOUS',
    'LABORATOIRE',
    'VACCINATION',
  ];
  departement: string[] = [
    'Medecine Générale',
    'CPN',
    'Maternite',
    'Laboratoire',
    'Petit Chirurgie',
    'Pharmacie',
    'Vaccination',
  ];
  docteur: string[] = [
    'BERNARD TCHAMI',
    'SYVIE ETOUNDI',
    'MARIE FOTSING'
  ]
  region: string[] = [
    'ASSURANCE',
    'CASH',
    'Autres',
  ];
  gender: string[] = [
    'Male',
    'Female',
  ];
  public registerForm!: FormGroup;
  public userIdToUpdate!:number;
  public isUpdateActive: boolean = false;

  constructor(private fb: FormBuilder, private api:ApiPatientService, private ActivatedRoute: ActivatedRoute,private router:Router, private toastService:NgToastService){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      Department: [''],
      ordre:[''],
      profession: [''],
      gender: [''],
      region: [''],
      date: [''],
      EMContact: [''],
      cni: [''],
      docteur:[''],
      age:[''],
      adresse:[''],
      typatient:[''],
      barre:[''],
      paiement:[''],
    });
    
    this.ActivatedRoute.params.subscribe(val => {
      this.userIdToUpdate= val['id'];
      this.api.getRegisteredPatientId(this.userIdToUpdate).subscribe(res=>{
        this.isUpdateActive= true;
        this.fillFormToUpdate(res);
      })
    })
  }

  submit(){
    this.api.postRegistration(this.registerForm.value).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"Patient Ajouté avec success", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['receptionBord'])
  
      
    })
    
  }
  update(){
    this.api.updateRegisterPatient(this.registerForm.value, this.userIdToUpdate).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"mise a jour effectuée avec succes", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['receptionBord'])
    });
  }
  
  fillFormToUpdate(user:Patient){
    this.registerForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      ordre:user.ordre,
      Department: user.Department,
      profession: user.profession,
      gender: user.gender,
      region: user.region,
      date: user.date,
      EMContact: user.EMContact,
      cni: user.cni,
      age: user.age,
      docteur:user.docteur,
      adresse:user.adresse,
      barre:user.barre,
      typatient:user.typatient,
      paiement:user.paiement,
    })
    
  }


}
