import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponent } from './event-details.component';
import { SessionListComponent, CreateSessionComponent, UpvoteComponent } from '../sessions';
import { CollapsibleWellComponent } from 'src/app/common';
import { DurationPipe } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule],
      declarations: [
        EventDetailsComponent,
        SessionListComponent,
        CreateSessionComponent,
        UpvoteComponent,
        CollapsibleWellComponent,
        DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
