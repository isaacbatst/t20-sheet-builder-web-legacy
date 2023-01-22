import { SheetBuilderStepChooseRace } from "./SheetBuilderStepChooseRace"
import { SheetBuilderStepChooseRole } from "./SheetBuilderStepChooseRole"
import { SheetBuilderStepInitialAttributesDefinition } from "./SheetBuilderStepInitialAttributesDefinition"
import { SheetBuilderStepInterface } from "./SheetBuilderStepInterface"

export type SheetBuilderSliderInterface = {
  next(): void
  previous(): void
  shouldShowPrevious(): boolean
  getDTO(): SheetBuilderStepsDTO
  getCurrent(): SheetBuilderStepInterface
}

export type SheetBuilderStepsDTO = {
  current: number
}

export class SheetBuilderSlider implements SheetBuilderSliderInterface {
  current: number = 0
  readonly steps: [
    SheetBuilderStepInitialAttributesDefinition, 
    SheetBuilderStepChooseRace, 
    SheetBuilderStepChooseRole
  ]

  constructor(
    sheetBuilderStepInitialAttributesDefinition: SheetBuilderStepInitialAttributesDefinition, 
    sheetBuilderStepChooseRace: SheetBuilderStepChooseRace, 
    sheetBuilderStepChooseRole: SheetBuilderStepChooseRole
  ){
    this.steps = [
      sheetBuilderStepInitialAttributesDefinition,
      sheetBuilderStepChooseRace,
      sheetBuilderStepChooseRole
    ]
  }

  previous() {
    const previousIndex = this.current - 1;

    if(previousIndex < 0) {
      throw new Error('FIRST_STEP')
    }

    this.current = previousIndex
  }

  shouldShowPrevious(): boolean {
    const previousIndex = this.current - 1;

    return previousIndex >= 0
  }

  next() {
    const nextIndex = this.current + 1;
        
    if(this.steps.length <= nextIndex) {
      throw new Error('LAST_STEP')
    }
    this.current = nextIndex;
  }

  getDTO(): SheetBuilderStepsDTO {
    return {
      current: this.current
    }
  }

  getCurrent(): SheetBuilderStepInterface {
    return this.steps[this.current]
  }
}