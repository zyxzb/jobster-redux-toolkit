import {
  showLoading,
  hideLoading,
  getAllJobs,
} from 'features/allJobs/allJobsSlice';
import customFetch, { checkedForUnauthorizedResponse } from 'utils/axios';
import { clearValues } from './jobSlice';

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post('/jobs', job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return checkedForUnauthorizedResponse(
      error.response.data.message,
      thunkAPI,
    );
  }
};
export const deleteJobThunk = async (jobID, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobID}`);
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return checkedForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return checkedForUnauthorizedResponse(error, thunkAPI);
  }
};
