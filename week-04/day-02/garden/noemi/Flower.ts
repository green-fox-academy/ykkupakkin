'use strict';
import { Flora } from './Flora';

export class Flower extends Flora {
  constructor(flowerColor: string) {
    super(5, 0.75, flowerColor);
  }
  getIdentity(): string {
    return 'Flower';
  }
}