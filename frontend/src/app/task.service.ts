import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }


  createList(title: string) {
    // send a web request to create a list
    return this.webReqService.post('lists', {title});
  }
  getLists(){
    return this.webReqService.get('lists');

  }
 
  updateList(listId: string , title: string){
    return this.webReqService.patch(`lists/${listId}`, {title});

  }
  deleteList(listId: string ){
    return this.webReqService.delete(`lists/${listId}`);
  }

  getTasks(listId: string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(listId : string , title: string) {

    return this.webReqService.post(`lists/${listId}/tasks`, {title});
  }

  updateTask(title: string , taskId: string , listId : string ) {
  
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, {title});
  }
  deleteTask(listId: string ,taskId: string ){
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  complete(task: Task){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      compeleted: true
    });
  }
}
