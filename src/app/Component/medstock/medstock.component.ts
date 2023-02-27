import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Medicament } from 'src/app/models/medicament.model';
import { ApiMedService } from 'src/app/SERVICE/api-med.service';

@Component({
  selector: 'app-medstock',
  templateUrl: './medstock.component.html',
  styleUrls: ['./medstock.component.css']
})
export class MedstockComponent implements OnInit{
  
  public registerForm!: FormGroup;
  public userIdToUpdate!:number;
  public isUpdateActive: boolean = false;

  constructor(private fb: FormBuilder, private api:ApiMedService, private ActivatedRoute: ActivatedRoute,private router:Router, private toastService:NgToastService){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nommed: [''],
      dci: [''],
      achat: [''],
      phone: [''],
      theurapetique:[''],
      quantite:[''],
      vente:[''],
      date:[''],

    });
   /* this.registerForm.controls[`height`].valueChanges.subscribe(res=>{
      this.calculateBmi(res);
    });*/
    this.ActivatedRoute.params.subscribe(val => {
      this.userIdToUpdate= val['id'];
      this.api.getRegisteredMedicamentId(this.userIdToUpdate).subscribe(res=>{
        this.isUpdateActive= true;
        this.fillFormToUpdate(res);
      })
    })
  }

  submit(){
    this.api.postRegistration(this.registerForm.value).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"Medicament Ajouté avec success", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['pharmacy'])
  
      
    })
    
  }
  update(){
    this.api.updateRegisterMedicament(this.registerForm.value, this.userIdToUpdate).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"mise a jour effectuée avec succes", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['pharmacy'])
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
  fillFormToUpdate(user:Medicament){
    this.registerForm.setValue({
      nommed: user.nommed,
      dci: user.dci,
      theurapetique: user.theurapetique,
      achat: user.achat,
      vente:user.vente,
      quantite: user.quantite,
      phone: user.phone,
      date: user.date,
    })
    
  }


}
