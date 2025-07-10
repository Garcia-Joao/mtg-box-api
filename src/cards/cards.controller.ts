import { Controller, Get, Param } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller()  // sem prefixo aqui para a rota ser /sets diretamente
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

}
