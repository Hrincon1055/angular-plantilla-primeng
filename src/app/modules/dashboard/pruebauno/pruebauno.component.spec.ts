import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaunoComponent } from './pruebauno.component';

describe('PruebaunoComponent', () => {
  let component: PruebaunoComponent;
  let fixture: ComponentFixture<PruebaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
