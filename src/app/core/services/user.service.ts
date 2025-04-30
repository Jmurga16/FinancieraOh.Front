import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly localStorageKey = 'users';

    constructor() {}

    initializeUsers(): void {
        const users = localStorage.getItem(this.localStorageKey);
        if (!users) {
            const defaultUsers = [
                { email: 'admin@yopmail.com', password: 'admin123' },
                { email: 'tesorero@financieraoh.com', password: 'tesorero123' },
                { email: 'user1@financieraoh.com', password: 'user123' },
                { email: 'user2@financieraoh.com', password: 'user456' },
            ];
            localStorage.setItem(this.localStorageKey, JSON.stringify(defaultUsers));
            console.log('Default users initialized in localStorage.');
        } else {
            console.log('Users already exist in localStorage.');
        }
    }

    addUser(newUser: { email: string; password: string }): void {
        const users = localStorage.getItem(this.localStorageKey);
        const userList = users ? JSON.parse(users) : [];
        
        // Verificar si el usuario ya existe
        const userExists = userList.some((user: { email: string }) => user.email === newUser.email);
        if (userExists) {
            console.log('User already exists in localStorage.');
            return;
        }

        // Agregar el nuevo usuario
        userList.push(newUser);
        localStorage.setItem(this.localStorageKey, JSON.stringify(userList));
        console.log('New user added to localStorage:', newUser);
    }
}