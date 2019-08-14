import {RELEASE} from '../constants/constReducers'

const actionSortByRelease = () => {
    return {
        type: RELEASE,
        payload: 'release'
    }
}

export default actionSortByRelease