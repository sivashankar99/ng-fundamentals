import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../../user/auth.service';
import { VoterService } from '../voter.service';
import { By } from '@angular/platform-browser';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from '../../shared';
import { CollapsibleWellComponent } from '../../../common';

describe('SessionListComponent' , () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement ;

    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'Joe'}
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: []
        });
    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        // element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                {id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner',
                abstract: 'abstract this', voters: ['Ram', 'lakhan'] },
            ];
            component.filterBy = 'all';
            component.sortBy = 'voters';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
});
