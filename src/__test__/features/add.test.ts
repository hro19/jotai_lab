import { add } from '../../features/add';

describe('add関数のテスト', () => {
    it('足し算その1', () => {
        expect(add(4, 3)).toBe(7);
    });
    it('足し算その2', () => {
        expect(add(4, 3, 5)).toBe(12);
    });
    it('足し算その3', () => {
        expect(add(4, 3, 7, 8)).toBe(22);
    });
    it('マイナスの足し算', () => {
        expect(add(-4, 1)).toBe(-3);
    });
    it('引数がない場合', () => {
        expect(add()).toBe(0);
    });
});
