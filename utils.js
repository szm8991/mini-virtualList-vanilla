// 找到第一个累加高度大于指定高度的序号
export function findIndexOverHeight(list, offset) {
  let currentHeight = 0;
  for (let i = 0; i < list.length; i++) {
    const { height } = list[i];
    currentHeight += height;
    if (currentHeight > offset) {
      return i;
    }
  }
  return list.length - 1;
}
