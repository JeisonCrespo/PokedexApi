import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerationFilterComponent } from './generation-filter.component';

describe('GenerationFilterComponent', () => {
  let component: GenerationFilterComponent;
  let fixture: ComponentFixture<GenerationFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
