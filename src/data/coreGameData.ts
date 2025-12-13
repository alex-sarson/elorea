import { Race, RaceId, Class, ClassId } from "../types";

export const races: ReadonlyArray<Race> = [
  { id: "human", name: "Human", description: "", traits: ["trait1"] },
  { id: "elf", name: "Elf", description: "", traits: ["trait1"] },
  { id: "dwarf", name: "Dwarf", description: "", traits: ["trait1"] },
] as const;

export const classes: ReadonlyArray<Class> = [
  {
    id: "fighter",
    name: "Fighter",
    description: "",
    features: ["feature1"],
    traits: ["trait1"],
  },
] as const;

export const raceById: Record<RaceId, Race> = Object.fromEntries(
  races.map((race) => [race.id, race])
) as Record<RaceId, Race>;

export const classById: Record<ClassId, Class> = Object.fromEntries(
  classes.map((cls) => [cls.id, cls])
) as Record<ClassId, Class>;
