import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedLayoutDiagramComponent } from './packed-layout-diagram.component';

describe('PackedLayoutDiagramComponent', () => {
  let component: PackedLayoutDiagramComponent;
  let fixture: ComponentFixture<PackedLayoutDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackedLayoutDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedLayoutDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
