import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

const ydoc = new Y.Doc();
const wsProvider = new WebsocketProvider('ws://localhost:1234', 'my-roomname', ydoc);

let synced = false;

wsProvider.on('status', event => {
  console.log(event.status); // logs "connected" or "disconnected"
    if(event.status === "connected" && !synced) {
        synced = true;
        console.log("connected")
    }
});