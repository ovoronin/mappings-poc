import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingTreeComponent } from './mapping-tree.component';

describe('MappingTreeComponent', () => {
  let component: MappingTreeComponent;
  let fixture: ComponentFixture<MappingTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
