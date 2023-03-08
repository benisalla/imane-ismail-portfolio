import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useReducer, useMemo } from "react";
const ISIM = createContext();
ISIM.displayName = "ISIMContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "IS_START_SOUND": {
            return { ...state, isStartSound: action.value };
        }
        case "IS_ANIMATION_SET": {
            return { ...state, isBGASet: action.value };
        }
        case "IS_MAIN_SOUND": {
            return { ...state, isMainSound: action.value };
        }
        case "IS_IMANE_TALK": {
            return { ...state, isImaneTalk: action.value };
        }
        case "IS_ISMAIL_TALK": {
            return { ...state, isIsmailTalk: action.value };
        }
        case "IS_STARS_WORK": {
            return { ...state, isStarsWork: action.value };
        }
        case "SET_PROJECTS": {
            return { ...state, projects: action.value };
        }
        case "SET_OPEN_SIDE_BAR": {
            return { ...state, openSideBar: action.value };
        }
        case "SET_IS_MOBILE": {
            return { ...state, isMobile: action.value };
        }
        case "SET_TEXT_COLOR": {
            return { ...state, textColor: action.value };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        };
    };
};

const ISIMControllerProvider = ({ children }) => {

    const initialState = {
        isStartSound: true,
        isBGASet: true,
        isMainSound: false,
        isImaneTalk: false,
        isIsmailTalk: false,
        isStarsWork: true,
        projects: [],
        openSideBar: true,
        isMobile: useMediaQuery('(min-width:768px)'),
        textColor: useMediaQuery('(min-width:768px)') ? "#fff" : "#fff",
    };

    const [controller, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

    return <ISIM.Provider value={value}>{children}</ISIM.Provider>;
}

const useISIMController = () => {
    const context = useContext(ISIM);
    if (!context) {
        throw new Error(
            "useISIMController should be used inside the ISIMControllerProvider."
        );
    }
    return context;
}

// Context module functions

const setIsStartSound = (dispatch, value) => dispatch({ type: "IS_START_SOUND", value });
const setIsBGASet = (dispatch, value) => dispatch({ type: "IS_ANIMATION_SET", value });
const setIsMainSound = (dispatch, value) => dispatch({ type: "IS_MAIN_SOUND", value });
const setIsImaneTalk = (dispatch, value) => dispatch({ type: "IS_IMANE_TALK", value });
const setIsIsmailTalk = (dispatch, value) => dispatch({ type: "IS_ISMAIL_TALK", value });
const setIsStarsWork = (dispatch, value) => dispatch({ type: "IS_STARS_WORK", value });
const setProjects = (dispatch, value) => dispatch({ type: "SET_PROJECTS", value });
const setOpenSidebar = (dispatch, value) => dispatch({ type: "SET_OPEN_SIDE_BAR", value });
const setIsMobile = (dispatch, value) => dispatch({ type: "SET_IS_MOBILE", value });
const setTextColor = (dispatch, value) => dispatch({ type: "SET_TEXT_COLOR", value });

export {
    ISIMControllerProvider,
    useISIMController,
    setIsStartSound,
    setIsMainSound,
    setIsImaneTalk,
    setIsIsmailTalk,
    setIsStarsWork,
    setIsBGASet,
    setProjects,
    setOpenSidebar,
    setIsMobile,
    setTextColor,
};
