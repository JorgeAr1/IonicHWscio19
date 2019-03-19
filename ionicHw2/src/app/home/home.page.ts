import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { HttpReqService } from '../services/http-req.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  nombre: string;
  data;
  constructor(private flashlight: Flashlight, private httpReq: HttpReqService, private router: Router, private toast: ToastService) {}

  search() {
    this.httpReq.get(this.nombre).subscribe(
      data => {
        this.data = data;
        this.httpReq.userData = data;
        this.router.navigate(['/home/git-info']);
      }, (err) => {
        this.toast.show(`Error: User not found`);
      }
    );
  }

  toggleLight() {
    this.flashlight.toggle();
    let isOn = 'off';
    if (this.flashlight.isSwitchedOn) {
      isOn = 'on';
    }
    this.toast.show(`Flashliht is ${isOn}`);
  }
}
