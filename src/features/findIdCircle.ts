import { circleType } from "../types/circle";

/**
 * 指定されたcircleIdに基づいて、与えられた円の配列から円を見つけます。
 * @param circles - 検索対象の円の配列です。
 * @param circleId - 検索する円のIDです。
 * @returns 指定されたcircleIdを持つ円オブジェクトです。
 * @throws 指定されたcircleIdを持つ円が見つからない場合にエラーがスローされます。
 */

export function findIdCircle(circles: circleType[], circleId: number): circleType {
    const circle = circles.find((circle) => circle.circleId === circleId);
    if (!circle) {
      throw new Error(`Circle with id ${circleId} not found`);
    }
    return circle!; // ここで非nullアサーション演算子を使う
}
