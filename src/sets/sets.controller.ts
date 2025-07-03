import { Controller, Get, Param } from '@nestjs/common';
import { SetsService } from './sets.service';

@Controller()  // sem prefixo aqui para a rota ser /sets diretamente
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get('sets')
  async getSets() {
    return this.setsService.getSets();
  }

  @Get('cards/:setCode')
  async getCardsBySet(@Param('setCode') setCode: string) {
    return this.setsService.getCardsBySet(setCode);
  }
}
