export const culculateAddTax = ({
  sum,
  tax = 0.1,
}: {
  sum: number;
  tax?: number;
}) => sum + sum * tax;
