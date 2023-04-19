import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit{
  estudio: Estudio[] = [];
  constructor(private estudioS: EstudioService, private tokenService: TokenService){}
  isLogged = false;
  ngOnInit(): void {
    this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEstudio():void{
    this.estudioS.lista().subscribe(
      data =>{
        this.estudio = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.estudioS.delete(id).subscribe({
        next: (data) => {
          this.cargarEstudio();
        }, error: (err) => {
          alert("No se pudo eliminar el estudio");
        }
    });
    }
  }
}
