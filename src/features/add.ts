/**
 * 数値を足し合わせます。
 * @param numbers 足し合わせる数値または数値の配列。
 * @returns 数値の合計値。
 */
export function add(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}