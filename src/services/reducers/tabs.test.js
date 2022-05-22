import * as actions from '../constants/tabs'
import {tabReducer} from "./tabs";

const initialTabState = {
    activeTab: 'one'
}

describe('tabReducer', ()=>{
    it('should return the initial State', () => {
        expect(tabReducer(undefined,{})).toEqual(initialTabState)
    })

    it('shoul handle SET_TAB', ()=> {
        expect(
            tabReducer(initialTabState, {
                type: actions.SET_TAB,
                tab: 'two'
            })
        ).toEqual(
            expect.objectContaining({
                activeTab: 'two',
            })
        )
    })
})