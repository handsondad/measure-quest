import { films as amount } from "./amount.ts";
import { films as china } from "./china.ts";
import { films as electric } from "./electric.ts";
import { films as heat } from "./heat.ts";
import { films as length } from "./length.ts";
import { films as light } from "./light.ts";
import { films as mass } from "./mass.ts";
import { films as modern } from "./modern.ts";
import { films as system } from "./system.ts";
import { films as time } from "./time.ts";
import type { Film } from "./types";
import { films as why } from "./why.ts";
import { films as world } from "./world.ts";

export type { Film, FilmScene, Cue, Point, ViewId } from "./types";

export const films: readonly Film[] = [
  ...why, ...china, ...world, ...system, ...length, ...mass, ...time, ...heat, ...electric, ...light, ...amount, ...modern
];

const byQuestion = new Map(films.map((film) => [film.question, film]));

export const filmFor = (questionId: string): Film | undefined => byQuestion.get(questionId);
