import allJobsSlice from 'features/allJobs/allJobsSlice';
import jobSlice from 'features/job/jobSlice';
import userSlice from 'features/user/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
