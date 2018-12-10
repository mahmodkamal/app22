import { Component, OnInit, Output ,EventEmitter} from '@angular/core';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output('search') search= new EventEmitter 
  constructor() { }

  ngOnInit() {
  }
  Search(f){
    let query = f.value;
    console.log(query);
  }

}
