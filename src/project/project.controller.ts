import { Controller, Get, Post, Delete, Patch, Body, Header, Query, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDTO } from './dto/project.dto';





@Controller('project')
export class ProjectController {

	constructor(private projectService: ProjectService){

	}


	@Post()
	create(@Body() project: ProjectDTO): ProjectDTO {

		return this.projectService.create(project); 
	}

	

	@Get()
	async findAll(): Promise<ProjectDTO[]> {

		return await this.projectService.findAll();

	}

	@Get(':id')
	async findProject(@Param() params): Promise<ProjectDTO> {

		return await this.projectService.findProject(params.id);

	}
	
	@Patch()
	editProject(@Body() project: ProjectDTO): ProjectDTO {

		return this.projectService.editProject(project);
	}

	@Delete()
	deleteProject(@Body() project: ProjectDTO): ProjectDTO {

		return this.projectService.deleteProject(project);
	}



}
