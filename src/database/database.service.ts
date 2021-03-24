import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class DatabaseService {

	private mysql;
	private con;


	constructor(private configService: ConfigService) {}



	openConnection():any {

		this.mysql = require('mysql');
		this.con = this.mysql.createConnection({
		  host: this.configService.get<string>('DATABASE_HOST'),
		  port: this.configService.get<string>('DATABASE_PORT'),
		  user: this.configService.get<string>('DATABASE_USER'),
		  password: this.configService.get<string>('DATABASE_PASSWORD'),
		  database: this.configService.get<string>('DATABASE')
		});
		this.con.connect();	

		return this.con;

	}

}
