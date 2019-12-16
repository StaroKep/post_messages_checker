export class PostMessagesService {
  constructor() {
    window.addEventListener("message", this.receiveMessage, false);

    this.receiveMessage = this.receiveMessage.bind(this);
  }

  receiveMessage(event) {
    console.log(event);
  }
}
