//With a Class

/* class Observable {
  constructor(){
    this.subscribers = []
  }

  subscribe(fn){
  this.subscribers.push(fn)
  }

  unsubscribe(fn){
    this.subscribers = this.subscribers.filter((item)=> item !== fn);
  }

  BroadcastChannel(data){
    for(let i = 0; i< this.subscribers.length; i++){
      this.subscribers[i](data);
    }
  }
}

const observer = new Observable();
const fn = (data) => {
  console.log("Callback wa0s executed with data", data);
};

observer.subscribe(fn); */

//Wtih  a Function
function createObservable() {

  return {
    subscribers: [],


    subscribe(fn){
      this.subscribers.push(fn)
    },

    unsubscribe(fn){
      this.subscribers = this.subscribers.filter((item)=> item !== fn);
    },

    broadcast(data){
      for(let i = 0; i< this.subscribers.length; i++){
      this.subscribers[i](data);
      }
    },
  };

}

const observer =  createObservable();
const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable");