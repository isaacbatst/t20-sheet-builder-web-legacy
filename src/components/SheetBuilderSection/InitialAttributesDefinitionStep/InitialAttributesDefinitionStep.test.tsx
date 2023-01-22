import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import InitialAttributesDefinitionStep from "./InitialAttributesDefinitionStep";
import { useAttributesLauncherPerPurchaseProjection } from "./useAttributesLauncherPerPurchaseProjection";
import { useAttributesLauncherPerPurchaseRef } from "./useAttributesLauncherPerPurchaseRef";

const makeSut = () => {
  const InitialAttributesDefinitionStepViewWrapperFake: React.FC = () => {
    const ref = useAttributesLauncherPerPurchaseRef();
    const attributesLauncher = useAttributesLauncherPerPurchaseProjection(ref)
  
    return (
      <InitialAttributesDefinitionStep 
        attributesLauncherPerPurchase={attributesLauncher} 
      />
    )
  }

  return {
    render: () => render(<InitialAttributesDefinitionStepViewWrapperFake />),
  }
}

describe('InitialAttributesDefinitionStep', () => { 
  it('should render with initial state', () => {
    const { render } = makeSut()
    const screen = render();

    expect(screen.getByRole('status', { name: 'Pontos' })).toHaveTextContent('Restam 10 pontos');
    expect(screen.getByRole('spinbutton', { name: 'Força' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Destreza' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Constituição' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Inteligência' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Sabedoria' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Carisma' })).toHaveValue(0)
  })
})