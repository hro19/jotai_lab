import { BentoType } from "../types/bento";

export const bentos:BentoType[] = [
    {dish:"唐揚げ",num:10},
    {dish:"唐揚げ",num:11},
    {dish:"唐揚げ",num:6}
];

//表示関数
export const show = (bento:BentoType,index:number) => {
    console.log("【"+index+"】" + bento.dish +bento.num + "個");
};
//中身を全て表示
export const showAll = (bentos:BentoType[]) => {
    bentos.map(show);
};

showAll(bentos);

//唐揚げ数最大
export const maxBento = bentos.reduce(function(a_bento:BentoType,b_bento:BentoType){return a_bento.num < b_bento.num ? b_bento : a_bento;});

//一つ食べる
maxBento.num--;

// console.log("-------");
// showAll(orders);