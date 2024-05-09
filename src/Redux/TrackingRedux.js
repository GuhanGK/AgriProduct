import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventAttendanceData: [],
    getAllCropData: [],
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
    },
});

export
    const
    {
        setEventAttendanceData,
        setAllCropDataData
    }
        = trackingSlice.actions

export const trackingReducer = trackingSlice.reducer;
