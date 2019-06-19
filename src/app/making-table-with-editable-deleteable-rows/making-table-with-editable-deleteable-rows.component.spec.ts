import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingTableWithEditableDeleteableRowsComponent } from './making-table-with-editable-deleteable-rows.component';

describe('MakingTableWithEditableDeleteableRowsComponent', () => {
  let component: MakingTableWithEditableDeleteableRowsComponent;
  let fixture: ComponentFixture<MakingTableWithEditableDeleteableRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingTableWithEditableDeleteableRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingTableWithEditableDeleteableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
