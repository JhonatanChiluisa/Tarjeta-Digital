import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ListaMenu } from 'src/app/data/menu';
@Component({
  selector: 'app-mealmenu',
  templateUrl: './mealmenu.component.html',
  styleUrls: ['./mealmenu.component.css']
})
export class MealmenuComponent implements OnInit{

  listaMenu: any = [];
  constructor(){}

  ngOnInit(): void {
    this.listaMenu = ListaMenu;
  }

}
