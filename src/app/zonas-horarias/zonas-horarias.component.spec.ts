import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasHorariasComponent } from './zonas-horarias.component';

describe('ZonasHorariasComponent', () => {
  let component: ZonasHorariasComponent;
  let fixture: ComponentFixture<ZonasHorariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonasHorariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasHorariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
