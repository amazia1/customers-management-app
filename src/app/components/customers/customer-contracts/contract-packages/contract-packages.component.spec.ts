import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPackagesComponent } from './contract-packages.component';

describe('ContractPackagesComponent', () => {
  let component: ContractPackagesComponent;
  let fixture: ComponentFixture<ContractPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
