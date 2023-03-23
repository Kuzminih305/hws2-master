const initState = {
    themeId: 1,
}
export type StateType = {
    themeId: number
}

export const themeReducer = (state:StateType = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' :
            return {themeId: action.payload.id}
        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => {
    return {
        type: 'SET_THEME_ID',
        payload: {
            id
        }
    }as const
}

