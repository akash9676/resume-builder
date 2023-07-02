import { TextField } from "@mui/material";
export const PersonalDetails = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl font-bold">Personal Details</h1>
        </div>
        <div>
          <div>
            <div className="text-sm font-light">Wanted Job Title</div>
            <TextField
              id="filled-helperText"
              label=""
              defaultValue="Ex:GDSC Lead"
              variant="filled"
            />
          </div>
        </div>

        <div>
          <div className="w-screen">
            <TextField id="First Name" label="First Name" variant="filled" />
          </div>
        </div>

        <div>
          <div>
            <div></div>
            <TextField id="Last Name" label="Last Name" variant="filled" />
          </div>
        </div>

        <div>
          <div>
            <div></div>
            <TextField id="Email" label="Email" variant="filled" />
          </div>
        </div>

        <div>
          <div>
            <div></div>
            <TextField id="Phone" label="Phone" variant="filled" />
          </div>
        </div>

        <div>
          <div>
            <div></div>
            <TextField id="Country" label="Country" variant="filled" />
          </div>
        </div>

        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
