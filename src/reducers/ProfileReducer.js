import { actions } from "../actions/actions";

export const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null,
};

export const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profileActions.DATA_FATCHING: {
            return {
                ...state,
                loading: true,
            };
        }
        case actions.profileActions.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts,
            };
        }
        case actions.profileActions.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        case actions.profileActions.BIO_UPDATED: {
            return {
                ...state,
                loading: false,
                user: { ...state.user, bio: action.data },
            };
        }
        case actions.profileActions.PROFILE_IMAGE_UPDATED: {
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    avatar: action.data,
                },
            };
        }

        default: {
            return state;
        }
    }
};
