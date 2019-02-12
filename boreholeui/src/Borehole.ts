export class Borehole {
  id: string;
  Diameter: number;
  Depth: number;
  Type: string;
  //  Class based approach would solve all the optional params below, but time...
  CableDiameter?: number;
  CableStrength?: number;
  CableLength?: number;
  DrillID?: number;
  DrillStrength?: number;

}
