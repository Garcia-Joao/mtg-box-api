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

  async getCardsBySet(setCode: string) {{
    try{
      let url = `https://api.scryfall.com/cards/search?q=e:${setCode}`;
      let allCards = [];

      while (url) {
        const response = await axios.get(url);
        allCards = allCards.concat(response.data.data);
        url = response.data.has_more ? response.data.next_page : null;
      }
      return allCards;
    } catch (error) {
      throw new HttpException('Error while seraching scryfall cards', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }}
}
