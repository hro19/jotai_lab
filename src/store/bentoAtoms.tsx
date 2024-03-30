import { atom } from "jotai";
import { BentoType } from "../types/bento";

const defaultBentos = [
    {dish:"唐揚げ",num:10},
    {dish:"唐揚げ",num:11},
    {dish:"唐揚げ",num:6}
];

export const bentosAtom = atom<BentoType[]>(defaultBentos);
