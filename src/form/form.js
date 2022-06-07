import React from "react";
import TextField from '@mui/material/TextField';
import { InputLabel, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";

export const Form = () => (
    <>
        <h1>Create product</h1>
        <form>
            <TextField id="name" label="name" variant="filled" />
            <TextField id="size" label="size" variant="filled" />
            <InputLabel id="type">Type</InputLabel>
            <Select
                labelId="type"
                id="demo-simple-select"
                value="a"
                label="type"
            >
                <MenuItem value="electronic">Electronic</MenuItem>
                <MenuItem value="furniture">Furniture</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
            </Select>
            <Button variant="outlined">Submit</Button>

        </form>
    </>
)

export default Form;