import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

export interface State {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguague
export type Action =
| { type: 'SET_FROM_LANGUAGE', payload: string }
| { type: 'INTERCHANGE_LANGUAGES' }
| { type: 'SET_TO_LANGUAGE', payload: string }
| { type: 'SET_FROM_TEXT', payload: string }
| { type: 'SET_RESULT', payload: string }
