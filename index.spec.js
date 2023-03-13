const value = {
    value: 'test'
}

describe('jest', () => {
    describe('toStrictEqual', () => {
        it('structured clone', () => {
            expect(structuredClone(value)).toStrictEqual(value);
        });
        it('JSON clone', () => {
            expect(JSON.parse(JSON.stringify(value))).toStrictEqual(value);
        });
    });

    describe('toEqual', () => {
        it('structured clone', () => {
            expect(structuredClone(value)).toEqual(value);
        });
        it('JSON clone', () => {
            expect(JSON.parse(JSON.stringify(value))).toEqual(value);
        });
    });

    describe('toBe', () => {
        it('structured clone', () => {
            expect(structuredClone(value)).toBe(value);
        });
        it('JSON clone', () => {
            expect(JSON.parse(JSON.stringify(value))).toBe(value);
        });
    });
})