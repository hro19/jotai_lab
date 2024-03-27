import { add } from '../features/add';

describe('add関数のテスト', () => {
    it('足し算', () => {
        expect(add(4, 3)).toBe(7);
    });
    it('マイナスの足し算', () => {
        expect(add(-4, 1)).toBe(-3);
    });
});
