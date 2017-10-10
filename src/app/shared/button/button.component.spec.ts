import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { hasClass } from '../helpers';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the button component', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should render the label text', () => {
    const textLabel = 'Testing';
    fixture.componentInstance.label = textLabel;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.innerHTML.trim()).toBe(textLabel);
  });

  it('should call function on clicked one time', () => {
    spyOn(fixture.componentInstance, 'emitClick').and.callThrough();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(fixture.componentInstance.emitClick).toHaveBeenCalledTimes(1);
  });

  it('should render with defined classes', () => {
    fixture.componentInstance.classes = 'button-block';
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(hasClass(button, 'button')).toBeTruthy();
    expect(hasClass(button, 'button-block')).toBeTruthy();
  });
});

