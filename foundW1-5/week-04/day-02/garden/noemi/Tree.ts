'use strict';
import { Flora } from './Flora';

export class Tree extends Flora {
  constructor(treeColor: string) {
    super(10, 0.4, treeColor);
  }
  getIdentity(): string {
    return 'Tree';
  }
}