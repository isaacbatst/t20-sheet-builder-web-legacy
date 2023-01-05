import { useState } from "react"
import { Attribute } from "t20-sheet-builder"

export const useAttributesNumberInputs = () => {
  const [strength, setStrength] = useState(0)
  const [dexterity, setDexterity] = useState(0)
  const [constitution, setConstitution] = useState(0)
  const [intelligence, setIntelligence] = useState(0)
  const [wisdom, setWisdom] = useState(0)
  const [charisma, setCharisma] = useState(0)

  return {
    strength: {value: strength, setValue: setStrength},
    dexterity: {value: dexterity, setValue: setDexterity},
    constitution: {value: constitution, setValue: setConstitution},
    intelligence: {value: intelligence, setValue: setIntelligence},
    wisdom: {value: wisdom, setValue: setWisdom},
    charisma: {value: charisma, setValue: setCharisma},
  }
}

export type AttributesChexboxes = Record<Attribute, {
  value: boolean, setValue(checked: boolean): void
}>

export const useAttributesChexboxes = () => {
  const [strength, setStrength] = useState(false)
  const [dexterity, setDexterity] = useState(false)
  const [constitution, setConstitution] = useState(false)
  const [intelligence, setIntelligence] = useState(false)
  const [wisdom, setWisdom] = useState(false)
  const [charisma, setCharisma] = useState(false)

  return {
    strength: {value: strength, setValue: setStrength},
    dexterity: {value: dexterity, setValue: setDexterity},
    constitution: {value: constitution, setValue: setConstitution},
    intelligence: {value: intelligence, setValue: setIntelligence},
    wisdom: {value: wisdom, setValue: setWisdom},
    charisma: {value: charisma, setValue: setCharisma},
  }
}