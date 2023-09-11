import Item1 from 'assets/items/item-1.png';
import Item2 from 'assets/items/item-2.png';
import Item3 from 'assets/items/item-3.png';
import Item4 from 'assets/items/item-4.png';
import Item5 from 'assets/items/item-5.png';

export const getUserItemLogo = (amount: number) => {
  if (amount < 10) return Item1;
  if (amount < 30) return Item2;
  if (amount < 50) return Item3;
  if (amount < 80) return Item4;
  return Item5;
};
