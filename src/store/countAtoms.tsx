import { atom } from "jotai";

export const countAtom = atom(1);
export const doubledAtom = atom((get) => get(countAtom) * 2)