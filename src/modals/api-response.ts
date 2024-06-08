export class ApiResponse{
    body: string;
    statusCode: number;
    constructor(body: string, statusCode: number){
        this.body = body;
        this.statusCode = statusCode;
    }
}