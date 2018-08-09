import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetE2EpageObjComponent } from './get-e2-epage-obj.component';

describe('GetE2EpageObjComponent', () => {
  let component: GetE2EpageObjComponent;
  let fixture: ComponentFixture<GetE2EpageObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetE2EpageObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetE2EpageObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
