import React, {FC, useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_MISSIONS } from './queries';
const logo = require('assets/images/icons/space-x-logo.svg');


const Home: FC = () => {
    const {data, loading, error} = useQuery(GET_ALL_MISSIONS);
    const [missions, setMissions] = useState([]);

    return (
        <section className="container">
            <h1>Home</h1>
            {/*{missions && missions.map((element: any, index:number) => (*/}
            {/*  <div>*/}
            {/*      <h3>Mission {element?.mission_name}</h3>*/}
            {/*      <p>Rocket that we use for this mission: {element?.rocket?.rocket_name}</p>*/}
            {/*      <p>Launch year {element?.launch_year}</p>*/}
            {/*      <img style={{width: 50, height: 50}} src={logo.default} alt=""/>*/}
            {/*  </div>*/}
            {/*))}*/}
        </section>
    );
};

export default Home;