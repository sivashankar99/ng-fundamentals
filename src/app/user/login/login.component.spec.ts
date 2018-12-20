import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/app/routes';
import { CreateEventComponent, EventsListComponent,
  EventDetailsComponent, CreateSessionComponent,
  EventThumbnailComponent, LocationValidator, SessionListComponent, DurationPipe, UpvoteComponent } from 'src/app/events';
import { Error404Component } from 'src/app/errors/error404/error404.component';
import { EventsAppComponent } from 'src/app/events-app.component';
import { NavbarComponent } from 'src/app/nav/navbar.component';
import { CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from 'src/app/common';
import { DebugElement } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let debugEl: DebugElement;

  beforeEach(async(() => {
    // const mockAuthService = {
    //   loginUser: () => Observable,
    //   currentUser: {userName: 'Joe'}
    // };
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)],
      declarations: [
        LoginComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        CreateEventComponent,
        LocationValidator,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent
      ],
      providers: [
        // {provide: AuthService, useValue: mockAuthService},
        { provide: APP_BASE_HREF, useValue : '/' }
    ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // debugEl = fixture.debugElement;
    fixture.detectChanges();
  });
  describe('username', () => {
    it('whether user is valid', () => {
      // component.login({userName: 'siva', password: 'password'});
      expect(component.loginInvalid).toBe(false);
    });
  });
});
