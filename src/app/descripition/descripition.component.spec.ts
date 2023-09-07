import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripitionComponent } from './descripition.component';

describe('DescripitionComponent', () => {
  let component: DescripitionComponent;
  let fixture: ComponentFixture<DescripitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripitionComponent]
    });
    fixture = TestBed.createComponent(DescripitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
