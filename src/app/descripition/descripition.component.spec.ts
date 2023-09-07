import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponent } from './descripition.component';

describe('DescripitionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionComponent]
    });
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
