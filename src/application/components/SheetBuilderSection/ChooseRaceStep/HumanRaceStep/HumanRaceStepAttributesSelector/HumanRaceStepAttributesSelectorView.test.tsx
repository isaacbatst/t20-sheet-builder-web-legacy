import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect } from "vitest";
import { AttributesLauncherPerPurchase } from "../../../InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import HumanRaceStepAttributesSelectorView from "./HumanRaceStepAttributesSelectorView";
import { useHumanRaceStepAttributesSelectorProjection } from "./useHumanRaceStepAttributesSelectorProjection";
import { useHumanRaceStepAttributesSelectorRef } from "./useHumanRaceStepAttributesSelectorRef";

const renderHumanRaceStepAttributesSelectorView = () => {
  const HumanRaceStepAttributesSelectorViewWrapperFake = () => {
    const selectorRef = useHumanRaceStepAttributesSelectorRef();
    const selector = useHumanRaceStepAttributesSelectorProjection(selectorRef);
    return <HumanRaceStepAttributesSelectorView 
      selector={selector} 
      initialAttributes={AttributesLauncherPerPurchase.initialAttributes} 
    />
  }

  return render(<HumanRaceStepAttributesSelectorViewWrapperFake />)
}

describe('HumanRaceStepAttributesSelectorView', () => {
  it('should render with initial values', () => {
    const screen = renderHumanRaceStepAttributesSelectorView();
    expect(screen.getByRole('checkbox', { name: /Força/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Destreza/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Constituição/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Inteligência/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Sabedoria/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Carisma/ })).not.toBeChecked()
  })

  it('should update preview by checking strength', async () => {
    const user = userEvent.setup();
    const screen = renderHumanRaceStepAttributesSelectorView();
    const strengthCheckbox = screen.getByRole('checkbox', { name: /Força/ });
    await user.click(strengthCheckbox);
    expect(screen.getByRole('checkbox', { name: /Força/ })).toHaveAccessibleName('Força (1)')
  })

  it('should update preview by unchecking strength', async () => {
    const user = userEvent.setup();
    const screen = renderHumanRaceStepAttributesSelectorView();
    const strengthCheckbox = screen.getByRole('checkbox', { name: /Força/ });
    await user.click(strengthCheckbox);
    await user.click(strengthCheckbox);
    expect(screen.getByRole('checkbox', { name: /Força/ })).toHaveAccessibleName('Força (0)')
  })
})