

import {
    RECEIVE_USER_INFO
} from './mutation-types'

export default {
    [RECEIVE_USER_INFO] (state, {userinfo}){
        state.userinfo = userinfo;
    }
}
