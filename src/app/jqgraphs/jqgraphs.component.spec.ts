import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqgraphsComponent } from './jqgraphs.component';

describe('JqgraphsComponent', () => {
  let component: JqgraphsComponent;
  let fixture: ComponentFixture<JqgraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqgraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqgraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
