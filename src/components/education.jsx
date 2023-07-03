import AddCircleIcon from "@mui/icons-material/AddCircle";

export const Education = () => {
    return (
        <div>
            <div className="text-2xl font-bold">Education</div>
            <div className="text-sm text-gray-500">
                A varied education on your resume sums up the value that your{" "}
                learnings and background will bring to job.
            </div>
            <div className="font-bold text-blue-800 flex bg-blue-50 hover:bg-blue-100 cursor-pointer">
                <div className="mr-2">
                    <AddCircleIcon color="primary" />
                </div>
                Add employment
            </div>
        </div>
    );
};
