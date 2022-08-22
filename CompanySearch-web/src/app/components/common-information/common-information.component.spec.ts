import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInformationComponent } from './common-information.component';

describe('CommonInformationComponent', () => {
  let component: CommonInformationComponent;
  let fixture: ComponentFixture<CommonInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
