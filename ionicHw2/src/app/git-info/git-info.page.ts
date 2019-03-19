import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../services/http-req.service';

@Component({
  selector: 'app-git-info',
  templateUrl: './git-info.page.html',
  styleUrls: ['./git-info.page.scss'],
})
export class GitInfoPage implements OnInit {
  userData;
  constructor(private httpReq: HttpReqService) { }

  ngOnInit() {
    this.userData = this.httpReq.userData;
  }

}
