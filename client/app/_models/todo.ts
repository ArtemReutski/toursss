export class ToDo {
	_id: number;
	listTitle: string;
	creator: string;
	tasks: Tasks[];
}

export class Tasks {
	taskName: string;
	date: string;
	taskDescrition: string;
	status: boolean;
}

export class Task {
		tasks: {
			taskName: string;
			date: string;
			taskDescrition: string;
			status: boolean;
	}
}