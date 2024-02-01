/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
| { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC <Props> = ({ onChange, type, value }) => { // Hay que hacer una interfaz con las propiedades que le pasas
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // Hay que poner de que tipo es el evento y de donde lo saca
    onChange(event.target.value as Language) // Obligas a que sea de tipo lenguaje por que es lo que le tienes que pasar
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
        {type === SectionType.From && <option value={AUTO_LANGUAGE}> Detectar idioma </option> }
    { Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => (
        <option key={key} value={key}>
        {language}
        </option>
    ))}
    </Form.Select>
  )
}
