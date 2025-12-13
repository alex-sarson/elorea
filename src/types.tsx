export type Screen = "startMenu" | "characterCreation";
export type RaceId = "human" | "elf" | "dwarf";
export type ClassId = "fighter" | "wizard" | "rogue";
export type Gender = "male" | "female";

export interface Race {
  id: RaceId;
  name: string;
  description: string;
  traits: string[];
}

export interface Class {
  id: ClassId;
  name: string;
  description: string;
  features: string[];
  traits: string[];
}
