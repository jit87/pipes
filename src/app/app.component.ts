import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán América';
  nombre2:string = 'El cocHErito leRe';

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI; 
  porcentaje: number = 0.234; 
  salario: number = 1234.5; 
  fecha: Date = new Date(); 
  activar: boolean = true; 

  videoUrl: string = 'https://www.youtube.com/embed/HFUWZ7Au640?si=RN6F4KYbw1wPQ3Ys';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }



  valorPromesa = new Promise <string> ((resolve)=>{
    setTimeout(()=>{
      resolve("llegó la data");
    }, 4500);
  });


  cambiarResult(){
    if(this.activar==true){
      this.activar = false;
    } else 
      this.activar = true; 
  }






}
