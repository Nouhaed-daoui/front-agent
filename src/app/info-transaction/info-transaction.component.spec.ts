import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTransactionComponent } from './info-transaction.component';

describe('InfoTransactionComponent', () => {
  let component: InfoTransactionComponent;
  let fixture: ComponentFixture<InfoTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
