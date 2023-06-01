import { PackageTypes } from "./package-types";

export class Package {
  
  id: number;

   packageType: PackageTypes;

   name: string;

   amount: number;

   usage: number;
}