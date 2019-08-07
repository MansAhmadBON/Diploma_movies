import {TARGET_FILM} from '../constants/constReducers'

const actionTargetFilm = target => {
    return {
        type: TARGET_FILM,
        payload: target
    }
}

export default actionTargetFilm