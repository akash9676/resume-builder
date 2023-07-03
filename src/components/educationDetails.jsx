import TextField from "@mui/material/TextField";
export const EducationDetails = () => {
    return (
        <div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="school"
                    multiline
                    maxRows={4}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Degree"
                    multiline
                    maxRows={4}
                />

                <DemoItem label="Controlled picker" component="DateRangePicker">
                    <DateRangePicker
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoItem>

                <TextField
                    id="outlined-multiline-flexible"
                    label="city"
                    multiline
                    maxRows={4}
                />
            </div>
        </div>
    );
};
