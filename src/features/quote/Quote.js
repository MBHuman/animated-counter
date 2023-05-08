import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCallback, useRef, useState } from 'react';
import anime from 'animejs';
import NumberAnimation from './NumberAnimation';

const Quote = (props) => {

    const [delay, setDelay] = useState(2500);
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);

    const handleAddValue = () => {
        setCount(Number(count) + Number(increment));
    }

    const handleInput = (event) => {

        const { value } = event.target;
        const regex = /^-?[0-9]*$/;

        if (regex.test(value)) {
            setIncrement(value)
        }
    }

    const handleInputDelay = (event) => {
        const { value } = event.target;
        const regex = /^[0-9]*$/;

        if (regex.test(value)) {
            setDelay(value);
        }
    }

    return (
        <Col>
            <h1>
                Current count:
                <NumberAnimation
                    endValue={count}
                    incrementValue={1}
                    durationValue={delay}
                />
            </h1>
            <h2>Animation delay:</h2>
            <h3>{delay}</h3>
            {/* <Loading /> */}
            <Form>
                <Col>
                    <Row className="py-1">
                        <Col xs={3}>
                            Delay
                        </Col>
                        <Col
                            className="align-self-center"
                            xs={9}
                        >
                            <input
                                value={delay}
                                onChange={handleInputDelay}
                            />
                        </Col>

                    </Row>
                    <Row className="py-1 media" >
                        <Col xs={3}>
                            Add value
                        </Col>
                        <Col
                            className="align-self-center"
                            xs={9}
                        >
                            <input
                                value={increment}
                                onChange={handleInput}
                            />
                        </Col>
                    </Row>

                    <Row className="py-2">
                        <Button
                            variant='success'
                            onClick={handleAddValue}
                        >
                            Add
                        </Button>
                    </Row >
                </Col>
            </Form >
        </Col >
    );
}

export default Quote;