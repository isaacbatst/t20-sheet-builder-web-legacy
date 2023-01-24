import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, it } from "vitest";
import { AttributesLauncherPerPurchase } from "../../InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { useHumanRaceStepAttributesSelectorProjection } from "./HumanRaceStepAttributesSelector/useHumanRaceStepAttributesSelectorProjection";
import { useHumanRaceStepAttributesSelectorRef } from "./HumanRaceStepAttributesSelector/useHumanRaceStepAttributesSelectorRef";
import { useHumanRaceStepVersatileProjection } from "./HumanRaceStepVersatile/useHumanRaceStepVersatileProjection";
import { useHumanRaceStepVersatileRef } from "./HumanRaceStepVersatile/useHumanRaceStepVersatileRef";
import HumanRaceStepView from "./HumanRaceStepView";

describe('HumanRaceStepView', () => {
  const renderHumanRaceStepView = () => {
    const HumanRaceStepViewWrapperFake = () => {
      const versatileRef = useHumanRaceStepVersatileRef();
      const versatile = useHumanRaceStepVersatileProjection(versatileRef);
      const selectorRef = useHumanRaceStepAttributesSelectorRef();
      const selector = useHumanRaceStepAttributesSelectorProjection(selectorRef);
      return <HumanRaceStepView 
        selector={selector}
        versatile={versatile}
        initialAttributes={AttributesLauncherPerPurchase.initialAttributes}
      />
    }
  
    return render(<HumanRaceStepViewWrapperFake />)
  }

  it('should render attributes selector initial state', () => {
    const screen = renderHumanRaceStepView();

    expect(screen.getByRole('checkbox', { name: /Força/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Destreza/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Constituição/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Inteligência/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Sabedoria/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Carisma/ })).not.toBeChecked()
  })

  it('should select attribute', async () => {
    const user = userEvent.setup();
    const screen = renderHumanRaceStepView();
    const strengthCheckbox = screen.getByRole('checkbox', { name: /Força/ });
    await user.click(strengthCheckbox);
    expect(screen.getByRole('checkbox', { name: /Força/ })).toHaveAccessibleName('Força (1)')
  })
})