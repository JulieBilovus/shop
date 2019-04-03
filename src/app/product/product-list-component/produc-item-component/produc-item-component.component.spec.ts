import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducItemComponentComponent } from './produc-item-component.component';

describe('ProducItemComponentComponent', () => {
  let component: ProducItemComponentComponent;
  let fixture: ComponentFixture<ProducItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
