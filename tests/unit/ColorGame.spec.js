import {mount} from '@vue/test-utils'
import GameColor from '../../src/components/games/ColorGame';

describe('Game Color unit tests: ', () => {
	test('is a vue instance', () => {
		const wrapper = mount(GameColor, {
			propsData:{
				task: {
					difficulty: 1,
				}
			}
		});
		expect(wrapper.isVueInstance()).toBeTruthy();
	});	
});