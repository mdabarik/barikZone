import { useLoaderData, useNavigation } from "react-router-dom";
import { Grid } from 'react-loader-spinner';
import Problem from "../Problem/Problem";
import { useEffect, useState } from "react";

const Problems = () => {

    const problems = useLoaderData();
    const navigation = useNavigation();

    // const [problems, setProblems] = useState([]);

    return (
        <div className="mx-auto mt-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Difficulty</th>
                            <th>URL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            navigation.state === 'loading'
                                ?
                                <Grid
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="grid-loading"
                                    radius="12.5"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                                :
                                problems && problems.map(problem => <Problem key={problem.id} problem={problem}></Problem>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>

        </div>
    );
};

export default Problems;