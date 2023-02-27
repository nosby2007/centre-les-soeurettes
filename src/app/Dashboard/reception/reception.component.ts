import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Patient } from 'src/app/models/patient.model';
import { ApiPatientService } from 'src/app/SERVICE/api-patient.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  today = new Date();
  jstoday = '';
  dataSource!:  MatTableDataSource<Patient>;
  public patient!: Patient[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone', /*'department',*/'ordre','date',/*'gender',*/'profession',/*'PaidType',*/'cni','action']

  constructor( private toast:NgToastService, private api:ApiPatientService, private router:Router, private congirm:NgConfirmService){
    this.jstoday = formatDate(this.today, 'MMM dd, yyyy , hh:mm:ss a', 'en-US');
  }
  ngOnInit(): void {
   this.getPatient();
  }
  
  getPatient(){
    this.api.getRegisteredPatient().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  edit(id:number){
    this.router.navigate(['update', id]);
  }

  delete(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer ce patient", 
    ()=>{
      this.api.deleteRegister(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatient();
    },
    ()=>{

    });
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}