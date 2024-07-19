import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailviewComponent } from './detailview.component';

describe('DetailviewComponent', () => {
  let component: DetailviewComponent;
  let fixture: ComponentFixture<DetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
