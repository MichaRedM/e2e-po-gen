import { Directive, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { E2eIdCollectorService } from './e2e-id-collector.service';

@Directive({
  // tslint:disable-next-line
  selector: '[e2e-id]'
})
export class E2eIdDirective implements OnInit, OnDestroy {

  // tslint:disable-next-line
  @Input('e2e-id')
    e2eid: string;

  constructor(
    private el: ElementRef,
    private e2eIdcollector: E2eIdCollectorService,
  ) {  }

  ngOnInit(): void {
    this.el.nativeElement.className += 'e2e-' + this.e2eid;
    this.e2eIdcollector.add(this.e2eid, this.el.nativeElement.tagName);
  }

  ngOnDestroy(): void {
    this.e2eIdcollector.remove(this.e2eid);
  }
}
