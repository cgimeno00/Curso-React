/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { ArrowIcon } from './components/Icons/Icons'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App (): JSX.Element {
  const
    {
      loading,
      fromLanguage,
      toLanguage,
      fromText,
      result,
      interchangeLanguages,
      setFromLanguage,
      setToLanguage,
      setFromText,
      setResult
    } = useStore()

  return (
   <>
   <Container fluid>
    <h1>Google Translate</h1>
    <Row>
      <Col>
      <Stack gap={2}>
      <LanguageSelector
     type = {SectionType.From}
     value = {fromLanguage}
     onChange={setFromLanguage} />
     <TextArea
    type={SectionType.From}
    value={fromText}
    onChange={setFromText}
    >
     </TextArea>
      </Stack>
      </Col>
      <Col xs='auto'>
      <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
        <ArrowIcon></ArrowIcon>
      </Button>
      </Col>
      <Col>
      <Stack gap={2}>
      <LanguageSelector
       type={SectionType.To}
       value={toLanguage}
       onChange={setToLanguage}
       />
       <TextArea
       loading={loading}
      type={SectionType.To}
      value={result}
      onChange={setResult}
     >
     </TextArea>
      </Stack>
      </Col>
    </Row>
   </Container>
   </>
  )
}

export default App
