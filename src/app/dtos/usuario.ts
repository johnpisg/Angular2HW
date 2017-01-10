export class Usuario
{
    public Id: number;
    public Nombre: String;
    public FechaNacimiento: Date;

    constructor(Id:number, Nombre:String, FechaNacimiento:Date){
        this.Id = Id;
        this.Nombre = Nombre;
        this.FechaNacimiento = FechaNacimiento;
    }
}