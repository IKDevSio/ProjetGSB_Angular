import {Etat} from './etat';

export class Fichefrais
{
  public id_frais: number;
  public anneemois: string;
  public datemodification: Date ;
  public montantvalide: number ;
  public nbjustificatifs: number;
  public id_visiteur: number;
  public id_etat : number;
  public lib_etat : string;
}
