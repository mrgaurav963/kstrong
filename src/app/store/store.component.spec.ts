import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { StoreService } from './service/store.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let storeServiceMock: jasmine.SpyObj<StoreService>;
  let activatedRouteMock: Partial<ActivatedRoute>;
  let jsonUrl: string;

  beforeEach(async () => {
    storeServiceMock = jasmine.createSpyObj('StoreService', ['getData']);
    storeServiceMock.getData.and.returnValue(of([])); // Mocking API response
    await TestBed.configureTestingModule({
      imports: [StoreComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()), // ✅ Provides HttpClient
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) },
        },
        { provide: StoreService, useValue: storeServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // storeService = fixture.debugElement.injector.get(StoreService);
    // storeService = TestBed.inject(StoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
