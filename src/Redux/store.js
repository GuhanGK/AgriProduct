import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './AuthRedux';
import { trackingReducer } from './TrackingRedux';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tracking: trackingReducer,
    },
});

export default store;
