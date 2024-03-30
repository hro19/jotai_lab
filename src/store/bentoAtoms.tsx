import { atom } from "jotai";
import { BentoType } from "../types/bento";

const defaultBentos = [
    {dish:"唐揚げ0",num:10},
    {dish:"唐揚げ1",num:11},
    {dish:"唐揚げ2",num:6}
];

export const bentosAtom = atom<BentoType[]>(defaultBentos);

export const maxBentoAtom = atom((get) => get(bentosAtom).reduce(function(a_bento:BentoType,b_bento:BentoType){return a_bento.num < b_bento.num ? b_bento : a_bento;}));