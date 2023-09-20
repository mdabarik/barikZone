import { Outlet } from "react-router-dom";
import PracticeProblems from "../../Components/PracticeProblems/PracticeProblems";

const PracticeLayout = () => {
    return (
        <div className="flex">
            <PracticeProblems></PracticeProblems>
            <Outlet></Outlet>
        </div>
    );
};

export default PracticeLayout;