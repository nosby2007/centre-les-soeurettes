import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Medicament } from 'src/app/models/medicament.model';
import { ApiMedService } from 'src/app/SERVICE/api-med.service';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  dataSource!:  MatTableDataSource<Medicament>;
  public Medicament!: Medicament[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','nommed','dci','theurapetique','achat', 'vente','quantite','date', 'action']

  constructor( private toast:NgToastService, private api:ApiMedService, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getMedicament();
  }
  
  getMedicament(){
    this.api.getRegisteredMedicament().subscribe(res=>{
      this.Medicament=res;
      this.dataSource= new MatTableDataSource(this.Medicament);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  edit(id:number){
    this.router.navigate(['updateStock', id]);
  }

  delete(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer ce médicament", 
    ()=>{
      this.api.deleteRegister(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getMedicament();
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