export class Quote {
    /*
    authorname?: string;
    name?: string;
    description?: string
    */
   public showDescription : boolean;//
   constructor(public id:number, public authorname: string, public name: string, public description: string, public completeDate: Date){
       this.showDescription = false;
   }
}
