import { actions } from "../actions/actions";

export const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case actions.postActions.POST_DATA_FATCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.postActions.POST_DATA_FATCHED: {
            return {
                ...state,
                loading: false,
                posts: action.data,
            };
        }
        case actions.postActions.POST_DATA_FETCH_ERROR: {
            return {
                ...state,
                error: action.error,
            };
        }
        case actions.postActions.POST_CREATED: {
            return {
                ...state,
                posts: [...state.posts, action.data],
                loading: false,
            };
        }
        case actions.postActions.POST_DELETED: {
            return {
                ...state,
                loading: false,
                posts: state.posts.filter((post) => post.id !== action.data),
            };
        }
        case actions.postActions.POST_EDITED: {
            return {
                ...state,
                loading: false,
                posts: state.posts.map((post) => {
                    if (post.id === action.data.id) {
                        return action.data;
                    }
                    return post;
                }),
            };
        }
        default: {
            return state;
        }
    }
};
