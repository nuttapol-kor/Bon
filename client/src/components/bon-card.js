import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function BonCard({bon}) {
    const deleteBon = () => {
        axios.delete('https://bon-mern.herokuapp.com/bons/delete-bon/' + bon._id).then((res) => {
            console.log('Deleted!!')
            window.location.reload(false)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {bon.owner}
                </Card.Title>
                <Card.Text>
                    {bon.bon}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className='d-flex justify-content-center'>
                    <Link className='edit-link btn btn-primary' to={"/edit-bon/"+bon._id}>
                        Edit
                    </Link>
                    <Button onClick={deleteBon} variant='danger'>Delete</Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default BonCard
