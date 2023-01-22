import { Attribute, Human, RaceName } from "t20-sheet-builder";
import { RaceStepInterface } from "../RaceStep";
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector";
import { HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile/HumanRaceStepVersatile";

export type HumanRaceStepInterface = RaceStepInterface & {
  build(): Human
}

export class HumanRaceStep implements HumanRaceStepInterface {
  readonly raceName: RaceName = RaceName.human

  constructor(
    readonly selector: HumanRaceStepAttributesSelectorInterface,
    readonly versatile: HumanRaceStepVersatileInterface
  ){}
  build(): Human {
    const selectedAttributes = this.selector.getSelectedAttributes()
    if(selectedAttributes.length !== 3) throw new Error('INVALID_SELECTED_ATTRIBUTES')
    const human = new Human(selectedAttributes)
    const firstChoice = this.versatile.getFirstChoice()
    const secondChoice = this.versatile.getSecondChoice()
    if(!firstChoice) throw new Error('UNDEFINED_FIRST_CHOICE')
    if(!secondChoice) throw new Error('UNDEFINED_SECOND_CHOICE')
    human.addVersatilChoice(firstChoice)
    human.addVersatilChoice(secondChoice)

    return human;
  }
}