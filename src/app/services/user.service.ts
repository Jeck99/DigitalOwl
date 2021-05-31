import { Injectable } from '@angular/core';
const BASEAPI = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() { }
  async getUsers() {
    try {
      return await fetch(`${BASEAPI}/todos/`)
        .then((res) => { return res.json() })
        .then(results => { return results })
    } catch (error) {
      console.log(error);
    }
  }
  getUserById(id: string) {
    fetch(`${BASEAPI}/todos/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
