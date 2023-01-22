export type SheetBuilderStepType = 'initialAttributesDefinition' | 'chooseRace' | 'chooseRole'

export type SheetBuilderStepInterface = {
  type: SheetBuilderStepType,
  getComponent(): JSX.Element;
  validate(): void
}