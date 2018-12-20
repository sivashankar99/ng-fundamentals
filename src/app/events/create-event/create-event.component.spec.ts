import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventComponent } from './create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/app/routes';
import { LoginComponent } from 'src/app/user/login/login.component';
import { EventsAppComponent } from 'src/app/events-app.component';
import { EventsListComponent, EventThumbnailComponent, EventDetailsComponent, LocationValidator, CreateSessionComponent, SessionListComponent, DurationPipe, UpvoteComponent, EventService } from '..';
import { NavbarComponent } from 'src/app/nav/navbar.component';
import { Error404Component } from 'src/app/errors/error404/error404.component';
import { CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from 'src/app/common';
import { APP_BASE_HREF } from '@angular/common';

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;

  beforeEach(async(() => {
    const mockEventService ={
      
    }
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)],
      declarations: [ CreateEventComponent,
        LoginComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        LocationValidator,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent ],
        providers: [
          {provide: EventService, useValue: mockEventService},
          { provide: APP_BASE_HREF, useValue : '/' }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
