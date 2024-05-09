import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventAttendanceData: [],
    getAllCropData: [],
    getMyCropData: [],
};

export const trackingSlice = createSlice({
    name: 'tracking',
    initialState,
    reducers: {
        setEventAttendanceData: (state, action) => {
            return {
                ...state,
                eventAttendanceData: action.payload,
            };
        },
        setAllCropDataData: (state, action) => {
            return {
                ...state,
                getAllCropData: action.payload,
            };
        },
        setMyCropDataData: (state, action) => {
            return {
                ...state,
                getMyCropData: action.payload,
            };
        },
    },
});

export
    const
    {
        setEventAttendanceData,
        setAllCropDataData,
        setMyCropDataData
    }
        = trackingSlice.actions

export const trackingReducer = trackingSlice.reducer;
