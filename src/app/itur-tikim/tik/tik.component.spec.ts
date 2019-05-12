import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TikComponent } from './tik.component';

describe('TikComponent', () => {
  let component: TikComponent;
  let fixture: ComponentFixture<TikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
