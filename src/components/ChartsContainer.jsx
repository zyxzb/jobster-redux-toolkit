import { useState } from 'react';
import { BarChart, AreaChart } from 'components';
import Wrapper from 'assets/wrappers/ChartsContainer';
import { useSelector } from 'react-redux';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((state) => state.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        type='button'
        onClick={() => setBarChart((prevState) => !prevState)}
      >
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
