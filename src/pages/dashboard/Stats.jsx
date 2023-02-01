import React, { useEffect } from 'react';
import { showStats } from 'features/allJobs/allJobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StatsContainer, ChartsContainer } from 'components';

const Stats = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
