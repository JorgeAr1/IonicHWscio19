import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInfoPage } from './git-info.page';

describe('GitInfoPage', () => {
  let component: GitInfoPage;
  let fixture: ComponentFixture<GitInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
