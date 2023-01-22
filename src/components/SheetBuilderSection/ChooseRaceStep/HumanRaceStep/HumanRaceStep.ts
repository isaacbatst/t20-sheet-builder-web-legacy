import { Attribute, Human, RaceName } from "t20-sheet-builder";
import { HumanRaceStepAttributesSelectorDTO, HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector";
import { HumanRaceStepVersatileDTO, HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";
import { RaceStepDTO, RaceStepInterface } from "../RaceStep";

export type HumanRaceStepInterface = RaceStepInterface & {
  getSelector(): HumanRaceStepAttributesSelectorInterface,
  getVersatile(): HumanRaceStepVersatileInterface
  getDTO(): HumanRaceStepDTO
}

export type HumanRaceStepDTO = RaceStepDTO & {
  selector: HumanRaceStepAttributesSelectorDTO,
  versatile: HumanRaceStepVersatileDTO
}

export class HumanRaceStep implements HumanRaceStepInterface {
  readonly raceName: RaceName = RaceName.human

  constructor(
    readonly selector: HumanRaceStepAttributesSelectorInterface,
    readonly versatile: HumanRaceStepVersatileInterface
  ){}
  getDTO(): HumanRaceStepDTO {
    return {
      selector: this.selector.getDTO(),
      versatile: this.versatile.getDTO(),
      raceName: this.raceName
    }
  }

  getSelector(): HumanRaceStepAttributesSelectorInterface {
    return this.selector
  }
  getVersatile(): HumanRaceStepVersatileInterface {
    return this.versatile
  }

  build(): Human {
    const selectedAttributes = Object.entries(this.selector.getAttributes())
      .filter(([key, checked]) => checked)
      .map(([attribute]) => attribute as Attribute)
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