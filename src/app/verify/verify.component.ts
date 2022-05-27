import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  isDisabled: boolean;
  isProceedDisabled: boolean;

  public static islogin: boolean = false;

  constructor(private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit(): void {

  }

  images = [1, 2, 3].map((n) => `../../assets/images/${n}.jpg`);

  onDigitInput(event: any) {

    let element;
    if (event.code !== 'Backspace') {
      element = event.srcElement.nextElementSibling;
    }

    if (event.code === 'Backspace') { element = event.srcElement.previousElementSibling; }

    if (element == null) {
      return;
    }
    element.focus();

  }

  checkCode(code: string) {
    let firstInput = <HTMLInputElement>document.getElementById("first-input");
    let secondInput = <HTMLInputElement>document.getElementById("second-input");
    let thirdInput = <HTMLInputElement>document.getElementById("third-input");
    let fourthInput = <HTMLInputElement>document.getElementById("fourth-input");

    if (code == "6666" && this.isDisabled == true) {
      firstInput.setAttribute("style", "color:#00966D; border: 1px solid #00966D; background: #E9FFF9;");
      secondInput.setAttribute("style", "color:#00966D; border: 1px solid #00966D; background: #E9FFF9;");
      thirdInput.setAttribute("style", "color:#00966D; border: 1px solid #00966D; background: #E9FFF9;");
      fourthInput.setAttribute("style", "color:#00966D; border: 1px solid #00966D; background: #E9FFF9;");
      this.alertifyService.success("Successfully Verified. Logining...");

      setTimeout(() => {
        VerifyComponent.islogin = true;
        this.router.navigate(['/todolist']);
      }, 3000);

    }
    else {
      firstInput.setAttribute("style", "color:#C30052; border: 1px solid #C30052; background: #FFE3E1;");
      secondInput.setAttribute("style", "color:#C30052; border: 1px solid #C30052; background: #FFE3E1;");
      thirdInput.setAttribute("style", "color:#C30052; border: 1px solid #C30052; background: #FFE3E1;");
      fourthInput.setAttribute("style", "color:#C30052; border: 1px solid #C30052; background: #FFE3E1;");
      this.alertifyService.error("Wrong Verification Code!");
    }
  }

  handleEvent(e: any) {
    this.isDisabled = true;
    this.isProceedDisabled = false;

    if (e.left == 0) {
      this.isDisabled = false;
      this.isProceedDisabled = true;
    }
  }
}