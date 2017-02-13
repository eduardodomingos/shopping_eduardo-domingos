/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartBagComponent } from './cart-bag.component';

describe('CartBagComponent', () => {
  let component: CartBagComponent;
  let fixture: ComponentFixture<CartBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
