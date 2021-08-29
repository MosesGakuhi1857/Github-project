export class User {
    constructor(
        public name:string,
        public location:string,
        public bio :string,
        public avatar_url:string,
        public public_repos : number,
        public followers:number,
        public following : number
    ){}
}
