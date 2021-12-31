import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function CreateBon() {
    const [owner, setOwner] = useState('')
    const [bon, setBon] = useState('')
    const addBon = (e) => {
        e.preventDefault();

        const bonObj = {
            owner: owner,
            bon: bon
        }

        axios.post('http://localhost:5000/bons/create-bon', bonObj).then(res => console.log(res.data))

        console.log(`owner: ${owner}, bon: ${bon}`)
        setOwner('')
        setBon('')
    }
    return (
        <div className="form-wrapper mt-3">
            <h1 className="display-4">Create Bon</h1>
            <Form onSubmit={addBon}>
                <Form.Group controlId='Owner'>
                    <Form.Label>Owner</Form.Label>
                    <Form.Control type="text" value={owner} onChange={(event) => {setOwner(event.target.value)}} />
                </Form.Group>
                <Form.Group controlId='Bon'>
                    <Form.Label>Bon</Form.Label>
                    <Form.Control type="text" value={bon} onChange={(event) => {setBon(event.target.value)}} />
                </Form.Group>
                <div className='mt-3'>
                    <Button variant='success' size="lg" block="block" type="submit">
                        Create Bon
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default CreateBon
