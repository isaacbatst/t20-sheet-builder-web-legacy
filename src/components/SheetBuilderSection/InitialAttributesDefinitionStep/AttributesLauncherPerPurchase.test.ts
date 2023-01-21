import { describe } from 'vitest';
import { AttributesLauncherPerPurchase } from './AttributesLauncherPerPurchase';

describe('AttributesLauncherPerPurchase', () => {
  it('should start with 10 points and zeroed attributes', () => {
    const launcher = new AttributesLauncherPerPurchase();
    expect(launcher.getPoints()).toBe(10)
    expect(launcher.getAttributes().strength).toBe(0)
    expect(launcher.getAttributes().dexterity).toBe(0)
    expect(launcher.getAttributes().constitution).toBe(0)
    expect(launcher.getAttributes().intelligence).toBe(0)
    expect(launcher.getAttributes().wisdom).toBe(0)
    expect(launcher.getAttributes().charisma).toBe(0)
  })

  it('should buy 1 strength with 1 point', () => {
    const launcher = new AttributesLauncherPerPurchase();
    launcher.buy('strength');
    expect(launcher.getAttributes().strength).toBe(1);
    expect(launcher.getPoints()).toBe(9)
  })

  it('should sell 1 strength for 1 point', () => {
    const launcher = new AttributesLauncherPerPurchase();
    launcher.sell('strength');
    expect(launcher.getAttributes().strength).toBe(-1);
    expect(launcher.getPoints()).toBe(11)
  })

  it('should buy 2 strength with 2 points', () => {
    const launcher = new AttributesLauncherPerPurchase();
    launcher.buy('strength');
    launcher.buy('strength');
    expect(launcher.getAttributes().strength).toBe(2);
    expect(launcher.getPoints()).toBe(8)
  })

  it('should buy 3 strength with 4 points', () => {
    const launcher = new AttributesLauncherPerPurchase();
    launcher.buy('strength');
    launcher.buy('strength');
    launcher.buy('strength');
    expect(launcher.getAttributes().strength).toBe(3);
    expect(launcher.getPoints()).toBe(6)
  })

  it('should buy 4 strength with 7 points', () => {
    const launcher = new AttributesLauncherPerPurchase();
    launcher.buy('strength');
    launcher.buy('strength');
    launcher.buy('strength');
    launcher.buy('strength');
    expect(launcher.getAttributes().strength).toBe(4);
    expect(launcher.getPoints()).toBe(3)
  })

  it('should not sell 2 strength', () => {
    const launcher = new AttributesLauncherPerPurchase();

    expect(() => {
      launcher.sell('strength');
      launcher.sell('strength');
    }).toThrow('MINIMUM_ATTRIBUTE')
  })
})