type OrderType = {
    dish: string;
    num: number;
};

const orders:OrderType[] = [
    {dish:"唐揚げ",num:10},
    {dish:"唐揚げ",num:11},
    {dish:"唐揚げ",num:6}
];

//表示関数
const show = (order:OrderType,index:number) => {
    console.log("【"+index+"】" + order.dish +order.num + "個");
};
//中身を全て表示
const showAll = (orders:OrderType[]) => {
    orders.map(show);
};

showAll(orders);

//唐揚げ数最大
const maxBento = orders.reduce(function(a:OrderType,b:OrderType){return a.num < b.num ? b : a;});

//一つ食べる
maxBento.num--;

// console.log("-------");
// showAll(orders);