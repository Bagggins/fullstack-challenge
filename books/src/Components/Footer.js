import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav'

const LinkContainer = styled(Link)`
    color: black;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
    margin-bottom: 8px;
`

function Footer() {
    return (
        <Nav className="justify-content-center fixed-bottom bg-white mb-1">
            <Nav.Item className="col-4">
                <LinkContainer to="/">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    Home
                </LinkContainer>
            </Nav.Item>

            <Nav.Item className="col-4">
                <LinkContainer to="newBook">
                    <FontAwesomeIcon icon={faPlus} size="2x" /> New Book
                </LinkContainer>
            </Nav.Item>

            <Nav.Item className="col-4">
                <LinkContainer to="#">
                    <FontAwesomeIcon icon={faUser} size="2x" />
                    Profile
                </LinkContainer>
            </Nav.Item>
        </Nav>
    )
}

export default Footer
