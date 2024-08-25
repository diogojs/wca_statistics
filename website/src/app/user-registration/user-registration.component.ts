import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import wcaSecrets from '../../../wcaauth.json'

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  api_code: string = "";
  token: string = "";
  wcaid: string = "";
  access_token_url: string = "https://www.worldcubeassociation.org/oauth/token"
  data_url: string = "https://www.worldcubeassociation.org/api/v0/me"

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.route.queryParamMap.subscribe(
      (query: any) => {
        let params = query['params'];
        if (params) {
          this.api_code = params['code'];
          this.requestToken();
        }
      }
    )
  }

  requestToken(): void {
    // let cid = wcaSecrets.client_id;
    // let sec = wcaSecrets.secret;
    let cid = "OS6jVGAcxX_MwpLawxS1hRq8IVNEfu-FAthO72ARdyw";
    let sec = "OP_J3qaVdOVL0I5vTwzKwRsyY2EVq9xZRKM9KsofN1I";
    let api_params = {
      grant_type:'authorization_code',
      code:this.api_code,
      client_id:cid,
      client_secret:sec,
      redirect_uri:window.location.origin + window.location.pathname
    }
    console.log(api_params);
    this.httpClient.post<any>(this.access_token_url, api_params).subscribe(
      (response: object) => {
        console.log("Json object: ");
        console.log(response);
      }
    )
  }
}
