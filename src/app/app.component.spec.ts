import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { PagesModule } from './pages/pages.module';
import { appRoutes } from './pages/routes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoreComponent
      ],
      imports: [
        // ProductsModule,
        PagesModule,
        RouterModule.forRoot(
          appRoutes
        ),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
