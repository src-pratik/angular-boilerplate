import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcTestComponent } from './oidc-test.component';

describe('OidcTestComponent', () => {
  let component: OidcTestComponent;
  let fixture: ComponentFixture<OidcTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
