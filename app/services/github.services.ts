import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username:string;
	private client_id = '70b6e277552447af4413';
	private client_secret = '54e465cdf5075ecea246c6233fa7eda7d7fa8047';
	
	constructor(private _http: Http){
		console.log('Github Service Ready');
		this.username = 'ksullivan96';
	}
	getUser() {
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}
	getRepos() {
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}
	updateUser(username:string) {
		this.username = username;
	}
}