import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name = ''
  welcomeMessageFromService = ''

  constructor(private route :ActivatedRoute, private welcomeDataService: WelcomeDataService) {}

  ngOnInit(){
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];

  }

  // getWelcomeMessage(){
  //   // console.log(this.welcomeDataService.executeWelcomeRestService()); //observable object
  //   this.welcomeDataService.executeWelcomeRestService().subscribe(
  //     response => this.handleSuccesfulResponse(response)
  //   );
  //   console.log('welcome from welcome.component.ts');
  // }
  // handleSuccesfulResponse(response :any){
  //   // console.log(response);
  //   // console.log(response.message)
  //   this.welcomeMessageFromService = response.message;
  // }

  getWelcomeMessage(){
    // console.log(this.welcomeDataService.executeWelcomeRestService()); //observable object
    this.welcomeDataService.executeWelcomeRestService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error), // error message
    );
  }
  handleSuccesfulResponse(response :any){
    // console.log(response);
    // console.log(response.message)
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error :any){
    // console.log(response);
    // console.log(response.message)
    this.welcomeMessageFromService = error.error.message;
  }
}
