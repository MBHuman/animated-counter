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
        setIncrement(value)
    }

    const handleInputDelay = (event) => {
        let { value } = event.target;
        const nonNegativeRegex = /^[0-9]*$/;
        if (nonNegativeRegex.test(value)) {
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
                                min="0"
                                type='number'
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
                                type="number"
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