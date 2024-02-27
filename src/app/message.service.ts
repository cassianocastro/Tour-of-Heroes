import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

/**
 *
 */
class MessageService
{

    messages: string[] = [];

    add(message: string)
    {
        this.messages.push(message);
    }

    clear()
    {
        this.messages = [];
    }
}

export { MessageService };