import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SetsService {
  async getSets() {
    try {
      const response = await axios.get('https://api.scryfall.com/sets');
      return response.data.data;  // só o array de sets
    } catch (error) {
      throw new HttpException('Erro ao buscar sets na Scryfall', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
