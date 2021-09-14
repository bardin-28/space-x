import {gql} from '@apollo/client';

export const GET_ALL_MISSIONS = gql`
    query{
        rockets {
            id
        }
        launches {
            id
            launch_success
            launch_date_local
            launch_year
            telemetry {
                flight_club
            }
            mission_name
            rocket {
                rocket_name
            }
        }
    }
`

