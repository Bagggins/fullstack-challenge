import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Footer from '../../Components/Footer'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Input } from 'semantic-ui-react'

const Title = styled.h1`
    font-size: 12px;
    font-weight: 700;
    font-family: SFProDisplay;
    color: #313131;
    margin-top: 9px;
    margin-bottom: 2.5px;
`

const Author = styled.h1`
    font-size: 10px;
    font-weight: 900;
    font-family: Roboto;
    color: #313131;
    text-overflow: none;
    margin-top: 2.5px;
    margin-bottom: 12px;
`

const Cover = styled.img`
    width: 105px;
    height: 153px;
    border-radius: 4px;
    margin-bottom: 9px;
    background-color: grey;
`

const WelcomeMsg = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 36px;
    margin-top: 30px;
    margin-left: 20px;
    font-family: SF Pro Display;
`

const SearchInput = styled(Input)`
    border-radius: 10px;
    width: 336px;
    height: 48px;
    border: none;
    margin-left: 20px;
    font-family: SFProText;
    margin-top: 50px;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
`

const BookCard = styled.div``

function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState([])
    const [results, setResults] = useState(8)

    useEffect(() => {
        axios
            .get('http://localhost:3001/api')
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const loadMore = () => {
        setResults((prevValue) => prevValue + 4)
    }

    return (
        <div className="mb-5">
            <Footer />
            <SearchInput
                iconPosition="left"
                icon={{ name: 'search', rotated: 'clockwise' }}
                autoComplete="off"
                type="text"
                id="header-search"
                placeholder="Search book"
                name="s"
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                    if (event.target.value === '') {
                        setResults(8)
                    }
                }}
            />

            <WelcomeMsg>
                Hi,{' '}
                <span style={{ color: 'red', marginRight: '11px' }}>
                    {' '}
                    Mehmed Al Fatih
                </span>
                👋
            </WelcomeMsg>
            <Container>
                <Row xs={4} className="pr-4 pl-1">
                    {books
                        .filter(
                            (val) =>
                                searchTerm === '' ||
                                val.title
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                        )
                        .map((val, index) => {
                            if (index >= results) return null

                            return (
                                <Col xs={4} key={index}>
                                    <BookCard>
                                        <Link to={`/${val.id}`}>
                                            <Cover
                                                className="shadow-sm"
                                                src={val.cover}
                                            ></Cover>
                                            <Title>{val.title}</Title>
                                            <Author>by {val.author}</Author>
                                        </Link>
                                    </BookCard>
                                </Col>
                            )
                        })}
                </Row>
            </Container>

            <Button
                variant="light"
                className="mt-3 mb-5 ml-3"
                onClick={loadMore}
            >
                Load More
            </Button>
        </div>
    )
}

export default Home
