import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function EditBon() {
    const [owner, setOwner] = useState('')
    const [bon, setBon] = useState('')
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://bon-mern.herokuapp.com/bons/edit-bon/' + id).then(res => {
            setOwner(res.data.owner)
            setBon(res.data.bon)
        }).catch((error) => {
            console.log(error)
        })
    }, [id])
    const editBon = (e) => {
        e.preventDefault();

        const bonObj = {
            owner: owner,
            bon: bon
        }

        axios.put('http://localhost:5000/bons/update-bon/' + id, bonObj).then((res) => {
            console.log(res.data)
            console.log('Updated')
        }).catch((error) => {
            console.log(error)
        })

        navigate('/bon-list')
    }
    return (
        <div className="form-wrapper mt-3">
            <h1 className="display-4">Update Bon</h1>
            <Form onSubmit={editBon}>
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

export default EditBon
