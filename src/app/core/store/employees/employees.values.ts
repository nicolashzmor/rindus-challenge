import {EmployeesModels} from "./employees.models";
import StoredEmployee = EmployeesModels.StoredEmployee;


export const EmployeesDatabase: StoredEmployee[] = [
  {
    id: '5aec6c1a-29d3-4baf-bb8b-baa91387fe10',
    name: 'Eve',
    surname: 'Nolan',
    work_position: 'full-stack developer',
    date_of_birth: '1987-09-29T00:00:00.000Z',
  },
  {
    id: '208dc88f-b1cd-44e5-916a-0861c2ed7cc7',
    name: 'Greg',
    surname: 'Ebert',
    work_position: 'full-stack developer',
    date_of_birth: '1987-09-29T00:00:00.000Z',
  },
  {
    id: 'f59d143d-c206-4bbc-b79a-a7d8dcbedea0',
    name: 'Harvey',
    surname: 'Walker',
    work_position: 'help desk',
    date_of_birth: '1987-09-29T00:00:00.000Z',
  },
  {
    id: '322109c6-eea6-46f2-a265-874a4bd0f48c',
    name: 'Estelle',
    surname: 'Sauer',
    work_position: 'product manager',
    date_of_birth: '1987-09-29T00:00:00.000Z',
  }
]
