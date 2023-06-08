import "./style.css"

import { Container, Row, Col } from "react-bootstrap"

function App() {
    return (
        <Container data-testid="app">
            <Row className="gx-5">
                <Col xs={4}>
                    <div className="b-box bg-primary"></div>
                </Col>
                <Col xs={8}>
                    <div className="b-box bg-danger"></div>
                </Col>
            </Row>
        </Container>
    )
}

export default App