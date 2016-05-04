describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return area: -1 and message: Error', function () {
            expect(answer.calculateArea(1,3,4, 'Success', 'Error')).toEqual({area: -1, message: 'Error'});
        });
        it('should return area: -9 and message: Error', function () {
            expect(answer.calculateArea(3,3,4, 'Success', 'Error')).toEqual({area: -9, message: 'Error'});
        });

        it('should return area: 4 and message: Success', function () {
            expect(answer.calculateArea(10,3,2, 'Success', 'Error')).toEqual({area: 4, message: 'Success'});
        });
        it('should return area: 1 and message: Success', function () {
            expect(answer.calculateArea(2,1,1, 'Success', 'Error')).toEqual({area: 1, message: 'Success'});
            expect(answer.calculateArea(10,3,3, 'Success', 'Error')).toEqual({area: 1, message: 'Success'});
            expect(answer.calculateArea(4,5,1, 'Success', 'Error')).toEqual({area: 1, message: 'Success'});

        });
        it('should return area: 10 and message: Success', function () {
            expect(answer.calculateArea(5,5,-1, 'Success', 'Error')).toEqual({area: 10, message: 'Success'});
        });

        it('should return area: 0 and message: Big null', function () {
            expect(answer.calculateArea(0,0,2, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(0,0,0, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(10,5,2, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
        });

        it('should return error', function () {
            expect(answer.calculateArea(1,2,'c', 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea(1,'b',3, 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea('a','c',4, 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea('a','c','d', 1, 2)).toEqual(false);
            expect(answer.calculateArea(1,2,3, 1, 2)).toEqual(false);
            expect(answer.calculateArea(1,2,'c', 1, 'Error')).toEqual(false);
            expect(answer.calculateArea(1,2,3, 'Success', 2)).toEqual(false);
        });
    });
});
