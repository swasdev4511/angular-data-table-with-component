import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      searchStr: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.form.get('searchStr').valueChanges.subscribe((r) => console.log(r));
  }

  get searchStr() {
    return this.form.get('searchStr');
  }

  onBlur(e) {
    console.log(e);
    console.log(this.searchStr);
  }

  onChange(e) {
    console.log(e);
  }
}
