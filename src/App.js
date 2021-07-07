import React from 'react'
import {Button, Container, Header, Input} from 'semantic-ui-react'

class Form extends React.Component {
    state = {
        schulCode: "",
        schulCrseScCode: "",
        schulKndScCode: "",
        schMmealScCode: "",
        schYmd: "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <Container frame>
                <form onSubmit={this.handleSubmit}>
                    <Header as='h2'>{new Date().toLocaleDateString()}</Header>
                    <b>학교 코드를 입력하세요.(인마고는 E100000276)</b>
                    <br/>
                    <Input name="schulCode"
                           placeholder="학교 코드"
                           value={this.state.schulCode}
                           onChange={this.handleChange}/>
                    <br/>
                    <b>학교 종류를 입력하세요. (유치원 1, 초등학교 2, 중학교 3, 고등학교 4)</b>
                    <br/>
                    <Input name="schulKndScCode"
                           placeholder="학교 종류"
                           value={this.state.schulKndScCode}
                           onChange={this.handleChange}/>
                    <br/>
                    <b>학교 종류를 입력하세요. (유치원 01, 초등학교 02, 중학교 03, 고등학교 04)</b>
                    <br/>
                    <Input name="schulCrseScCode"
                           placeholder="학교 종류"
                           value={this.state.schulCrseScCode}
                           onChange={this.handleChange}/>
                    <br/>
                    <b>조식 1, 중식 2, 석식 3</b>
                    <br/>
                    <Input name="schMmealScCode"
                           placeholder="급식 종류"
                           value={this.state.schMmealScCode}
                           onChange={this.handleChange}/>
                    <br/>
                    <b>날짜 (YYYY.MM.DD)</b>
                    <br/>
                    <Input name="schYmd"
                           placeholder="YYYY.MM.DD"
                           value={this.state.schYmd}
                           onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <Button type="sumbit" onClick={this.check}>확인</Button>
                </form>
            </Container>
        )
    }
}

export default Form