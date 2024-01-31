/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useStore } from './hooks/useStore'

function App (): JSX.Element {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage } = useStore()

  return (
   <Container fluid>
    <h1>Google Translate</h1>
    <Row>
      <Col>
      <h2>From</h2>
      {fromLanguage}
      </Col>
      <Col>
      <h2>Change</h2>
      <button onClick={interchangeLanguages}>
        Change
      </button>
      </Col>
      <Col>
      <h2>To</h2>
      {toLanguage}
      </Col>
    </Row>
   </Container>
  )
}

export default App
