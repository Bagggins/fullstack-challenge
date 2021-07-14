import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookOpen,
    faHeadphones,
    faShareSquare,
} from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav'

const LinkContainer = styled(Link)`
    color: black;

    display: flex;
    flex-direction: row;
    font-family: SFProDisplay;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    color: #3f4043;
    margin-top: 14px;
    margin-bottom: 19px;
`

const NavContainer = styled(Nav)`
    position: fixed;
    width: 335px;
    height: 56px;
    left: 20px;
    top: 703px;
    background: #ffffff;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
`

function Navbar() {
    return (
        <NavContainer className="justify-content-center fixed-bottom bg-white mb-1">
            <Nav.Item className="col-4">
                <LinkContainer to="#">
                    <FontAwesomeIcon icon={faBookOpen} size="1x" />
                    Read
                </LinkContainer>
            </Nav.Item>

            <Nav.Item className="col-4">
                <LinkContainer to="#">
                    <FontAwesomeIcon icon={faHeadphones} size="1x" />
                    Listen
                </LinkContainer>
            </Nav.Item>

            <Nav.Item className="col-4">
                <LinkContainer to="#">
                    <FontAwesomeIcon icon={faShareSquare} size="1x" />
                    Share
                </LinkContainer>
            </Nav.Item>
        </NavContainer>
    )
}

export default Navbar
