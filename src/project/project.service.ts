import { Injectable, Body } from '@nestjs/common';
import { ProjectDTO } from './dto/project.dto';
import { DatabaseService } from '../database/database.service';





@Injectable()
export class ProjectService {


	

	constructor(private databaseService:DatabaseService) {}


	create(project: ProjectDTO): ProjectDTO {


		var connection = this.databaseService.openConnection();
		

		connection.query('Insert Into projects (title, text_body) Values ("' + project.title + '", "' + project.textBody + '");', function (err, rows, fields) {
		  if (err) {
			console.log(err);
		  }

		  	
		});

		connection.end();
		
		return project;
	}

	findAll(): Promise<ProjectDTO[]>{

		var connection = this.databaseService.openConnection();

		return new Promise(function(resolve,reject){
			connection.query('select * from projects;', function (err, rows, fields) {
			  if (err) {
			  	reject(new Error("database error"));
				console.log(err);
			  } else {
			  	resolve(rows);
			  }
			});

			connection.end();
		});
	}

	findProject(id: String): Promise<ProjectDTO> {

		var connection = this.databaseService.openConnection();

		return new Promise(function(resolve,reject){
			connection.query('select * from projects where id=?', [id], function(err, rows, fields) {
				if(err){
					reject(new Error("Error in findProject database query"));
					console.log(err);
				} else {
					resolve(rows[0]);
				}



			});

		});
	}

	editProject(project: ProjectDTO): ProjectDTO {

		var connection = this.databaseService.openConnection();
		connection.query('update projects set title = "?", text_body = "?" where id = ?;', [project.title, project.textBody, project.id], function(err, rows, fields){
			if(err) {
				console.log(err);
			}
		});

		connection.end();

		return project;


	}

	deleteProject(project: ProjectDTO): ProjectDTO {
		var connection = this.databaseService.openConnection();

		connection.query('delete from projects where id = ?;', [project.id], function(err, rows, fields){

		}) 

		return project;

		
	}



	
}
