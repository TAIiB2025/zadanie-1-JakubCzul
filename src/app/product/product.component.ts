import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KoszykComponent } from '../koszyk/koszyk.component';

export class Product {
  constructor(
   public nazwa: string,
   public cena: number,
   public dataUtworzenia: Date,
   public czyPromocja: boolean,
   public liczbaSztuk: number = 0
 ) {}
}

@Component({
  selector: 'app-product',
  imports: [CommonModule,KoszykComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  produkty : Product[] = [
    new Product("szampon",20.00,new Date('2025-04-23'), false),
    new Product("perfumy",40.00,new Date('2025-04-23'), false),
    new Product("białko",50.00,new Date('2025-04-23'), true),
    new Product("kreatyna",50.00,new Date('2025-04-23'), true),
    new Product("trenbolone",20,new Date('2025-04-23'), false)
  ]


  pokazujProdukty: boolean = true;
  koszyk: number = 0;

  toggleProducts() {
    this.pokazujProdukty = !this.pokazujProdukty;
  }

  dodajPrzedmiotDoKoszyka(product:Product){
    this.koszyk += product.cena;
    product.liczbaSztuk++;
  }

  wyczyscKoszyk() {
    this.koszyk = 0;
    this.produkty.forEach(product => product.liczbaSztuk = 0);
  }

}
