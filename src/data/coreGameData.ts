import { Race, RaceId, Class, ClassId } from "../types";

export const races: ReadonlyArray<Race> = [
  {
    id: "human",
    name: "Human",
    description:
      "Humans typically live for about 80 years, they're unable to see in the dark unaided.",
    traits: ["Extra Language"],
  },
  {
    id: "elf",
    name: "Elf",
    description:
      "Elves typically live for about 700 years, they have keen eyesight and are able to see in the dark.",
    traits: ["Darkvision"],
  },
  {
    id: "dwarf",
    name: "Dwarf",
    description:
      "Dwarves typically live for about 350 years, they are sturdy and have a natural resistance to poison.",
    traits: ["Resistant to poison"],
  },
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
