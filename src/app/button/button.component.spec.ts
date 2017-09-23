import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


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

  it('should create', () => {
    expect(component).toBeTruthy();
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
    expect(button.innerHTML.trim()).toBe('Testing');
  });

  it('should call function on clicked one time', () => {
    spyOn(fixture.componentInstance, 'callback');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(fixture.componentInstance.callback).toHaveBeenCalledTimes(1);
  });
});

