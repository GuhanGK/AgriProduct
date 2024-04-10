import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventAttendanceData: [],
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
    },
});

export
    const
    {
        setEventAttendanceData,
    }
        = trackingSlice.actions

export const trackingReducer = trackingSlice.reducer;
