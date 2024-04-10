import { circleType } from "../../types/circle";
import { findIdCircle } from "../../features/findIdCircle";

describe("findIdCircleのテスト", () => {
    const circles:circleType[]  = [
        { circleId: 1, x: 10, y: 20, figure: "circle" },
        { circleId: 2, x: 30, y: 40, figure: "circle" },
        { circleId: 3, x: 50, y: 60, figure: "rect" },
        { circleId: 4, x: 70, y: 80, figure: "circle" },
    ];

    it("should return the circle with the specified circleId", () => {
        const circleId = 2;
        const expectedCircle = { circleId: 2, x: 30, y: 40, figure: "circle" };

        const result = findIdCircle(circles,circleId);

        expect(result).toEqual(expectedCircle);
    });

    it("should throw an error if the circle with the specified circleId is not found", () => {
        const circleId = 5;

        expect(() => {
            findIdCircle(circles, circleId);
        }).toThrowError();
    });
});

