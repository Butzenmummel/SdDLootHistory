import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowTableComponent } from './wow-table.component';

describe('WowTableComponent', () => {
  let component: WowTableComponent;
  let fixture: ComponentFixture<WowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WowTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
