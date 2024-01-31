/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStore } from './hooks/useStore'

function App (): JSX.Element {
  const { fromLanguage, setFromLanguage } = useStore()

  return (
   <Container fluid>
    <h1>Google Translate</h1>
    <Row>
      <Col>
      <h2>From</h2>
      </Col>
      <Col>
      <h2>Change</h2>
      </Col>
      <Col>
      <h2>To</h2>
      </Col>
    </Row>
    <button onClick={() => { setFromLanguage('es') }}>Cambiar a español</button>
    {fromLanguage}
   </Container>
  )
}

export default App
