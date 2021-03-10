const sortList = require('../src/sortList');

test("sortList function", () => {
	expect(sortList([2,1,5,8,3])).toStrictEqual([1,2,3,5,8]);
	expect(sortList(["a","d","b","c","e"])).toStrictEqual(["a","b","c","d","e"]);
	expect(sortList(["1","5","2","3","4"])).toStrictEqual(["1","2","3","4","5"]);
	expect(sortList(['80', '9', '700', 40, 1, 5, 200])).toStrictEqual([1,5,'9',40,'80',200,'700']);
});