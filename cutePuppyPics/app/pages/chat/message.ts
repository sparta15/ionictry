export class Message {
  constructor(
    public username: string,
    public text: string,
    public response: boolean) {}

  switch(count: number){
    if(count%2===0) this.response=false;
    else this.response=true;
  }
};
