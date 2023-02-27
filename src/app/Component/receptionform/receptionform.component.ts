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
      department: [''],
      ordre:[''],
      profession: [''],
      gender: [''],
      region: [''],
      date: [''],
      EMContact: [''],
      cni: [''],


    });
   /* this.registerForm.controls[`height`].valueChanges.subscribe(res=>{
      this.calculateBmi(res);
    });*/
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
      this.toastService.success({detail:"success", summary:"Professionel Ajouté avec success", duration:3000});
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

  /*calculateBmi(heightValue: number){
    const weight = this.registerForm.value.height;
    const height = heightValue;
    const bmi = weight/(height * height);
    this.registerForm.controls[`bmi`].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls[`bmiResult`].patchValue("Underweight");
        break;
      case ( bmi >= 18.5 && bmi < 25):
        this.registerForm.controls[`bmiResult`].patchValue("Normal");
        break;
      case bmi >= 25 && bmi <30:
        this.registerForm.controls[`bmiResult`].patchValue("Overrweight");
        break;
    
      default:
        this.registerForm.controls[`bmiResult`].patchValue("Obese");
        break;
    }

  }*/
  fillFormToUpdate(user:Patient){
    this.registerForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      ordre:user.ordre,
      department: user.department,
      profession: user.profession,
      gender: user.gender,
      region: user.region,
      date: user.date,
      EMContact: user.EMContact,
      cni: user.cni
    })
    
  }


}
