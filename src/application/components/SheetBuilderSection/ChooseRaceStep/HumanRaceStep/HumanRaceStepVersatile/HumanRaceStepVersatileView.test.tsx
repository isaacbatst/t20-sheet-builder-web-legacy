import { render } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import { describe } from "vitest";
import HumanRaceStepVersatileView from "./HumanRaceStepVersatileView";
import { useHumanRaceStepVersatileProjection } from "./useHumanRaceStepVersatileProjection";
import { useHumanRaceStepVersatileRef } from "./useHumanRaceStepVersatileRef";

const renderHumanRaceStepVersatileView = (wrapper?: React.FC) => {
  const HumanRaceStepVersatileViewWrapperFake = () => {
    const versatileRef = useHumanRaceStepVersatileRef();
    const versatile = useHumanRaceStepVersatileProjection(versatileRef);
    return <HumanRaceStepVersatileView versatile={versatile} />
  }

  return render(<HumanRaceStepVersatileViewWrapperFake />, { wrapper })
}

describe('HumanRaceStepVersatileView', () => {
  it('should select different skills', async () => {
    const screen = renderHumanRaceStepVersatileView();

    const firstChoice = screen.getByRole('combobox', { name: 'Primeira escolha (perícia)' })
    await selectEvent.select(firstChoice, 'Pontaria')
    const secondChoiceType = screen.getByRole('combobox', { name: 'Tipo da segunda escolha' })
    await selectEvent.select(secondChoiceType, 'Perícia')
    const secondChoice = screen.getByRole('combobox', { name: 'Segunda escolha (perícia)' })
    await selectEvent.select(secondChoice, 'Luta')
  })

  it('should not select same skill', async () => {
    const screen = renderHumanRaceStepVersatileView();

    const firstChoice = screen.getByRole('combobox', { name: 'Primeira escolha (perícia)' })
    await selectEvent.select(firstChoice, 'Pontaria')
    const secondChoiceType = screen.getByRole('combobox', { name: 'Tipo da segunda escolha' })
    await selectEvent.select(secondChoiceType, 'Perícia')
    const secondChoice = screen.getByRole('combobox', { name: 'Segunda escolha (perícia)' })
    await selectEvent.select(secondChoice, 'Pontaria')

    expect(screen.getByRole('alert', { name: 'Erro em Versátil' }))
      .toHaveTextContent('As escolhas devem ser diferentes')
  })

  it('should select one skill and one power', async () => {
    const screen = renderHumanRaceStepVersatileView();

    const firstChoice = screen.getByRole('combobox', { name: 'Primeira escolha (perícia)' })
    await selectEvent.select(firstChoice, 'Pontaria')
    const secondChoiceType = screen.getByRole('combobox', { name: 'Tipo da segunda escolha' })
    await selectEvent.select(secondChoiceType, 'Poder')
    const secondChoice = screen.getByRole('combobox', { name: 'Segunda escolha (poder)' })
    await selectEvent.select(secondChoice, 'Esquiva')
  })
})