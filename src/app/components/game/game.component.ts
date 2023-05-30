import { Component, OnInit } from '@angular/core';
import { CurrencyClientService, Roott } from 'src/app/services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  messageForUser!: string;
  roott!: Roott[];
  
  constructor(private currencyClientService: CurrencyClientService) {

  }
  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(val => {
      this.roott = val;
      console.log(val);
    });
  }

  sayHello(value: string) {
    this.messageForUser = 'Hejo ' + value;
  }

}
