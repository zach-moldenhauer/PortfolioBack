import{IsString, IsNumber} from "class-validator";

export class ProjectDTO {
	@IsNumber()
	id: number;

	@IsString()
	title: string;
	@IsString()
	textBody: string;

	

	

}