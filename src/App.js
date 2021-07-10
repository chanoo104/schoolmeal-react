import React, { useState } from 'react'
import { Dropdown, Button, Container, Header, Input } from 'semantic-ui-react'

import axios from 'axios'
import { Meal } from './meal'


export const App = () => {
    return (
        <Form />
    )
}

const schoolOptions = [
    {
        key: '유치원',
        text: '유치원',
        value: '1',
    },
    {
        key: '초등학교',
        text: '초등학교',
        value: '2',
    },
    {
        key: '중학교',
        text: '중학교',
        value: '3',
    },
    {
        key: '고등학교',
        text: '고등학교',
        value: '4',
    },
]

const Form = () => {
    const [form, setForm] = useState({
        schulCode: "",
        schoolKind: "",
        schMmealScCode: "",
        schYmd: "",
    })
    const [mealData, setMealData] = useState(null);

    const handleDropdown = (e, { value, name }) => {
        console.log(value)
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getmeal = async (form) => {
        try {
            let response = await axios.get("http://localhost:8080/meal", {
                params: form
            })
            return response.data;
        } catch (e) {
            throw new Error();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            schulCode: form.schulCode,
            schulCrseScCode: '0' + form.schoolKind,
            schulKndScCode: form.schoolKind,
            schMmealScCode: form.schMmealScCode,
            schYmd: form.schYmd.replace(/-/gi, '.')
        }
        console.log(formData)
        const data = await getmeal(formData);
        console.log(data);
        setMealData(data);
    }


    return (
        <Container text frame style={{ marginTop: '2em' }}>
            <form onSubmit={handleSubmit}>
                <Header as='h2'>{new Date().toLocaleDateString()}</Header>

                <b>학교 코드를 입력하세요.(인마고는 E100000276)</b>

                <Input fluid name="schulCode"
                    placeholder="학교 코드"
                    value={form.schulCode}
                    onChange={handleChange}
                // error='Please enter your last name'
                />

                <b>학교 종류를 선택하세요.</b>
                <Dropdown
                    name='schoolKind'
                    placeholder='학교 종류 선택'
                    fluid
                    selection
                    value={form.schoolKind}
                    onChange={handleDropdown}
                    options={schoolOptions}
                />

                <b>급식 종류를 선택하세요.</b>
                <Dropdown
                    name='schMmealScCode'
                    placeholder='급식 종류 선택'
                    fluid
                    selection
                    value={form.schMmealScCode}
                    onChange={handleDropdown}
                    options={[
                        {
                            key: '조식',
                            text: '조식',
                            value: '1',
                        },
                        {
                            key: '중식',
                            text: '중식',
                            value: '2',
                        },
                        {
                            key: '석식',
                            text: '석식',
                            value: '3',
                        }
                    ]}
                />

                <b>날짜</b>
                <Input type='date' fluid name="schYmd"
                    placeholder="YYYY.MM.DD"
                    value={form.schYmd}
                    onChange={handleChange} />
                <br />
                <Button type="sumbit">확인</Button>
            </form>
            {mealData && <Meal data={mealData} />}
        </Container>
    )
}

export default Form