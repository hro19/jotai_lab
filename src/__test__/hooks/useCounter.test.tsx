import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

test('should initialize count to 0', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
});

test('should increase count by 1', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increase();
    });

    expect(result.current.count).toBe(1);
    expect(result.current.isDecreaseDisable).toBe(false);
});

test('should decrease count by 1 if count is greater than 0', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.decrease();
    });

    expect(result.current.count).toBe(0);
    expect(result.current.isDecreaseDisable).toBe(true);
});

test('should not decrease count if count is 0', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.decrease();
    });

    expect(result.current.count).toBe(0);
    expect(result.current.isDecreaseDisable).toBe(true);
});

test('should not decrease count if count is 1', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increase();
    });

    act(() => {
        result.current.increase();
    });

    act(() => {
        result.current.decrease();
    });

    expect(result.current.count).toBe(1);
    expect(result.current.isDecreaseDisable).toBe(false);
});

test('increase2回する', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter());

    act(() => {
        result.current.increase();
    });

    act(() => {
        result.current.increase();
    });

    expect(result.current.count).toBe(2);
    expect(result.current.isDecreaseDisable).toBe(false);
});