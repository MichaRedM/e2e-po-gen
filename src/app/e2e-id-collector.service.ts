import { Injectable } from '@angular/core';

@Injectable()
export class E2eIdCollectorService {

  allE2EIds: {id: string, type: string}[] = [];

  constructor() {
    window['e2eIdService'] = this;
  }

  add(id: string, type: string) {
    this.allE2EIds.push({id, type});
  }
  remove(id: string) {
  }

  get allIds(): {id: string, type: string}[] {
    return this.allE2EIds;
  }

}
