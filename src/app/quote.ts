export class Quote {
    /*
    authorname?: string;
    name?: string;
    description?: string
    */
   showDescription : boolean;
   constructor(public authorname: string, public name: string, public description: string, public completeDate: Date){
       this.showDescription = false;
   }
}
