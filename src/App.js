import React, {useState} from 'react'
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
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

import axios from 'axios'
import {Meal} from './meal'
import DateFnsUtils from "@date-io/date-fns";
import {format, parse} from "date-fns";
import {ko} from 'date-fns/esm/locale'
import {green} from "@material-ui/core/colors";

export const App = () => {
    return (
        <Form/>
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
    const [form, setForm] = useState({
        schulCode: "",
        schoolKind: "",
        schMmealScCode: "",
        schYmd: today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate(),
    })
    const [mealData, setMealData] = useState(null);


    const handleChange = (event) => {
        console.log(event)
        const name = event.target.name;
        setForm({
            ...form,
            [name]: event.target.value,
        });
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            schulCode: form.schulCode,
            schulCrseScCode: '0' + form.schoolKind,
            schulKndScCode: form.schoolKind,
            schMmealScCode: form.schMmealScCode,
            schYmd: form.schYmd
        }
        setLoading(true);
        console.log(formData);
        const data = await getmeal(formData);
        console.log(data);
        if (data.status === "OK") {
            setMealData(data.meals);
            setLoading(false);
        } else {
            alert("해당 날짜에는 급식이 없습니다!");
            setLoading(false);
        }
    }


    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <h1 className={classes.title}>{new Date().toLocaleDateString()}</h1>
                <TextField fluid name="schulCode"
                           defaultValue="Hello World"
                           id="standard-basic"
                           label="학교 코드"
                           value={form.schulCode}
                           onChange={handleChange}
                />
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel>학교 종류</InputLabel>
                    <Select
                        labelId="schoolKind"
                        id="schoolKind"
                        value={form.schoolKind}
                        onChange={handleChange}
                        inputProps={{
                            name: 'schoolKind',
                            id: 'schoolKind',
                        }}
                    >
                        <MenuItem value={1}>유치원</MenuItem>
                        <MenuItem value={2}>초등학교</MenuItem>
                        <MenuItem value={3}>중학교</MenuItem>
                        <MenuItem value={4}>고등학교</MenuItem>
                    </Select>
                </FormControl>
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
                <br/>
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
                <br/>
                <Button type="sumbit" variant="contained" disabled={loading}>확인</Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
            </form>
            {mealData && <Meal data={mealData}/>}
        </Container>
    )
}

export default Form