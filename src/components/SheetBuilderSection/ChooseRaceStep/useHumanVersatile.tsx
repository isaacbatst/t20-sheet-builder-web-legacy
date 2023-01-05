import { useState } from "react"
import { VersatileChoiceSkill, SkillName, VersatileChoice, Attribute, GeneralPowerName, VersatileChoicePower, GeneralPowerFactory, VersatileChoiceType } from "t20-sheet-builder"

export const useHumanVersatile = () => {
  const [firstVersatileChoice, setFirstVersatileChoice] = useState<VersatileChoiceSkill>(new VersatileChoiceSkill(SkillName.acrobatics))
  const [secondVersatileChoice, setSecondVersatileChoice] = useState<VersatileChoice>(new VersatileChoiceSkill(SkillName.animalHandling))
  const secondChoiceTitle = secondVersatileChoice.type === 'power' ? 'um poder' : 'uma perícia'

  const makeSecondVersatileChoice = (params: { type: 'skill', value: SkillName } | { type: 'power', value: GeneralPowerName }) => {
    if(params.type === 'skill'){
      return setSecondVersatileChoice(new VersatileChoiceSkill(params.value))
    }
    return setSecondVersatileChoice(new VersatileChoicePower(GeneralPowerFactory.make({ name: params.value})))
  }

  const setDefaultChoice = (type: VersatileChoiceType) => {
    if(type === 'skill') {
      return makeSecondVersatileChoice({ type: 'skill', value: SkillName.animalHandling })
    }

    makeSecondVersatileChoice({ type: 'power', value: GeneralPowerName.dodge })
  }

  return {
    firstVersatileChoice, setFirstVersatileChoice,
    secondVersatileChoice, setDefaultChoice,
    secondChoiceTitle, setSecondVersatileChoice: makeSecondVersatileChoice
  }
}