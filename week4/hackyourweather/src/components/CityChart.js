import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from './Spinner';
import ErrorMessage from './ErrorText';

const CityChart = () => {
  const [axises, setAxises] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({});

  const { name } = useParams();
  const history = useHistory();

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=${API_KEY}&units=metric`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod < 400) {
        const forecastInfo = {
          city: data.city.name,
          country: data.city.country,
          axis: data.list.map((element) => {
            const axisesData = {
              x: element.dt_txt,
              y: element.main.temp_max,
            };
            return axisesData;
          }),
        };
        setAxises(forecastInfo);
        setLoading(false);
        setError({});
      } else {
        throw Error(data.city.cod);
      }
    } catch (err) {
      setError(err.message);
      setLoading(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    let isMounted = true;
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [name]);

  function handleGoBack() {
    history.goBack();
  }
  const colors = {
    grey: 'grey',
    blue: 'rgb(0, 102, 255)',
  };
  return (
    <>
      {isLoading && <Spinner />}
      <h2>5 Day Forecast</h2>
      {!isLoading && (
        <h3>
          {axises.city}, {axises.country}
        </h3>
      )}
      {!isLoading && (
        <div className="chart">
          <AreaChart
            width={600}
            height={400}
            data={axises.axis}
            margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis dataKey="y" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="y"
              stroke={colors.blue}
              fill={colors.blue}
              name="Temp"
            ></Area>
            <Tooltip />
          </AreaChart>
          <button onClick={handleGoBack} className="exploreBtn forecast">
            Go Back
          </button>
        </div>
      )}

      {!Object.keys(isError) == 0 && <ErrorMessage isError={isError} />}
    </>
  );
};
export default CityChart;
