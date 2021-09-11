import React, { useState } from 'react'
import {
    Button,
    CircularProgress,
    Container,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import axios from 'axios'
import { Meal } from './meal'
import DateFnsUtils from "@date-io/date-fns";
import { format, parse } from "date-fns";
import { ko } from 'date-fns/esm/locale'
import { green } from "@material-ui/core/colors";

export const Schoolmeal = () => {
    return (
        <Form />
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 180,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 30
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        marginTop: 5,
        marginLeft: -43,
    },
}));


const Form = () => {
    const classes = useStyles();
    const today = new Date();
    const [loading, setLoading] = React.useState(false);
    const [schools, setSchools] = React.useState([]);
    const [form, setForm] = useState({
        region: "",
        kraOrgNm: "",
        schulCode: "",
        schoolKind: "",
        schMmealScCode: "",
        schYmd: today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate(),
    });
    const [mealData, setMealData] = useState(null);

    const handleChange = (event) => {
        console.log(event)
        const name = event.target.name;
        setForm({
            ...form,
            [name]: event.target.value,
        });
    };

    const handleSchool = async (e) => {
        setForm({
            ...form,
        });
        const formdata = {
            query: e.target.value,
            region: form.region
        }
        if (formdata.region !== "" && formdata.query !== "") {
            const schools = await getschools(formdata);
            console.log(schools);
            setSchools(schools.schools);
        }
    }

    const handleDate = (e) => {
        setForm({
            ...form,
            schYmd: format(e, 'yyyy.MM.dd'),
        }
        )
    }

    const getmeal = async (form) => {
        try {
            let response = await axios.get("http://localhost:8080/meal", {
                params: form
            })
            return response.data;
        } catch (e) {
            // throw new Error();
        }
    }

    const getschools = async (form) => {
        try {
            let response = await axios.get("http://localhost:8080/school", {
                params: form
            })
            return response.data
        } catch (e) {
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            schulCode: schools[0].orgCode,
            schulCrseScCode: schools[0].schulKndScCode,
            schulKndScCode: schools[0].schulCrseScCode,
            schMmealScCode: form.schMmealScCode,
            schYmd: form.schYmd
        }
        setLoading(true);
        console.log(formData);
        const data = await getmeal(formData);
        console.log(data);
        try {
            if (data.status === "OK") {
                setMealData(data.meals);
                setLoading(false);
            } else {
                alert("해당 날짜에는 급식이 없습니다!");
                setLoading(false);
            }
        } catch (e) {

        }
    }


    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <h1 className={classes.title}>{new Date().toLocaleDateString()}</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel>관할 교육청</InputLabel>
                    <Select
                        labelId="schoolKind"
                        id="schoolKind"
                        value={form.region}
                        onChange={handleChange}
                        inputProps={{
                            name: 'region',
                            id: 'region',
                        }}
                    >
                        <MenuItem value={"sen"}>서울특별시</MenuItem>
                        <MenuItem value={"pen"}>부산광역시</MenuItem>
                        <MenuItem value={"dge"}>대구광역시</MenuItem>
                        <MenuItem value={"ice"}>인천광역시</MenuItem>
                        <MenuItem value={"gen"}>광주광역시</MenuItem>
                        <MenuItem value={"dje"}>대전광역시</MenuItem>
                        <MenuItem value={"use"}>울산광역시</MenuItem>
                        <MenuItem value={"goe"}>경기도</MenuItem>
                        <MenuItem value={"gwe"}>강원도</MenuItem>
                        <MenuItem value={"cbe"}>충청북도</MenuItem>
                        <MenuItem value={"cne"}>충청남도</MenuItem>
                        <MenuItem value={"jbe"}>전라북도</MenuItem>
                        <MenuItem value={"jne"}>전라남도</MenuItem>
                        <MenuItem value={"kbe"}>경상북도</MenuItem>
                        <MenuItem value={"gne"}>경상남도</MenuItem>
                        <MenuItem value={"jje"}>제주특별자치도</MenuItem>
                    </Select>
                </FormControl>
                <br />
                {/* <Autocomplete
                    id = "학교 검색"
                    options = {schools}
                    onChange={e => {
                        if(e.target.value !== "" | e.target.value != null) {
                            handleSchool(e.target.value);
                        }
                    }}
                    renderInput={(params) => <TextField disabled={form.region == ""} fluid name="search" label="학교 검색" />}
                /> */}
                <TextField disabled={form.region === ""} onChange={handleSchool} fluid name="search" label="학교 검색" />
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel>급식 종류</InputLabel>
                    <Select
                        labelId="schMmealScCode"
                        id="schMmealScCode"
                        value={form.schMmealScCode}
                        onChange={handleChange}
                        inputProps={{
                            name: 'schMmealScCode',
                            id: 'schMmealScCode',
                        }}
                    >
                        <MenuItem value={1}>조식</MenuItem>
                        <MenuItem value={2}>중식</MenuItem>
                        <MenuItem value={3}>석식</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ko}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy.MM.dd"
                        margin="normal"
                        id="schYmd"
                        label="날짜 선택"
                        value={parse(form.schYmd, "yyyy.MM.dd", new Date())}
                        onChange={handleDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <br />
                <Button type="sumbit" variant="contained" disabled={loading}>확인</Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </form>
            {mealData && <Meal data={mealData} />}
        </Container >
    )
}

export default Schoolmeal;