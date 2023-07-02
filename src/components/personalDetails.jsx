import { TextField } from '@mui/material';
export const PersonalDetails = () => {
  return(
    <>
      <div>
        <div>
          <h1 className="text-2xl font-bold">Personal Details</h1>
        </div>
        <div>
          <div className="text-sm font-light">
            Wanted Job Title 
          </div>
          <TextField id="standard-basic" label="Eg:GDSC Lead" variant="standard" />
        </div>
      </div>
    </>
  );
};
