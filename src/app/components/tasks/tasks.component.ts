import {Component, OnInit} from '@angular/core';
import {Task} from "../entities/Task";
import {TaskService} from "../../services/task/task.service";
import {AdressService} from "../../services/adress/adress.service";
import {Observable, Subject} from "rxjs";
import {from} from "rxjs/observable/from";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    tasks: Task[];
    input = new Subject();
    search:string;

    constructor(private taskservice: TaskService, private adressService: AdressService) {
        this.setTasks();
    }

    onChange(e:string) {
        this.input.next(e);
    }


    setTasks() {
        this.input.subscribe(()=>{
            this.tasks = this.taskservice.findByName(this.search);
        });
    }

    ngOnInit() {
    }

}
