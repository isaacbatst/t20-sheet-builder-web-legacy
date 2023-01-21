import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from "react";
import { describe } from "vitest";
import { AttributesLauncherPerPurchase } from "./AttributesLauncherPerPurchase";
import AttributesLauncherPerPurchaseView from "./AttributesLauncherPerPurchaseView";
import { useAttributesLauncherPerPurchaseProjection } from "./useAttributesLauncherPerPurchaseProjection";

const AttributesLauncherPerPurchaseViewWrapperFake: React.FC = () => {
  const ref = useRef(new AttributesLauncherPerPurchase());
  const attributesLauncher = useAttributesLauncherPerPurchaseProjection(ref.current)

  return (
    <AttributesLauncherPerPurchaseView attributesLauncher={attributesLauncher} />
  )
}

const renderSut = () => render(
  <AttributesLauncherPerPurchaseViewWrapperFake />
)

describe('AttributesLauncherPerPurchaseView', () => { 
  it('should render with initial values', () => {
    const screen = renderSut();

    expect(screen.getByRole('status', { name: 'Pontos' })).toHaveTextContent('Restam 10 pontos');
    expect(screen.getByRole('spinbutton', { name: 'Força' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Destreza' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Constituição' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Inteligência' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Sabedoria' })).toHaveValue(0)
    expect(screen.getByRole('spinbutton', { name: 'Carisma' })).toHaveValue(0)
  })

  it('should buy strength', async () => {
    const screen = renderSut();
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Comprar 1 ponto de Força' })
    await user.click(button);
    expect(screen.getByRole('spinbutton', { name: 'Força' })).toHaveValue(1)
    expect(screen.getByRole('status', { name: 'Pontos' })).toHaveTextContent('Restam 9 pontos');
  })

  it('should sell strength', async () => {
    const screen = renderSut();
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Vender 1 ponto de Força' })
    await user.click(button);
    expect(screen.getByRole('spinbutton', { name: 'Força' })).toHaveValue(-1)
    expect(screen.getByRole('status', { name: 'Pontos' })).toHaveTextContent('Restam 11 pontos');
  })
})