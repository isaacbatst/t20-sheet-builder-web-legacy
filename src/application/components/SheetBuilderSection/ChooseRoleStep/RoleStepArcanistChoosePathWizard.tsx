import React, { useEffect, useState } from 'react'
import { ArcanistPath, ArcanistPathWizard, ArcanistPathWizardFocuses, ArcanistPathWizardFocusStatic, ArcanistPathWizardFocusWand, Translator } from 't20-sheet-builder'

type Props = {
  setPath(path: ArcanistPath): void
}

const RoleStepArcanistChoosePathWizard: React.FC<Props> = ({ setPath }) => {
  const [SelectedFocus, setSelectedFocus] = useState<ArcanistPathWizardFocusStatic>()

  useEffect(() => {
    if(!SelectedFocus) return

    const focus = new SelectedFocus()
    setPath(new ArcanistPathWizard(focus))
  }, [setPath, SelectedFocus])

  return (
    <div className='flex justify-center'>
      <div>Você lança magias através de um foco:</div>
      <select name="wizard-focus" id="wizard-focus">
        {Object.values(ArcanistPathWizardFocuses.getAll()
          .map(focus => (
            <option key={focus.equipmentName} onSelect={() => setSelectedFocus(focus)} value={focus.equipmentName}>
              {Translator.getEquipmentTranslation(focus.equipmentName)}
            </option>))
        )}
      </select>
    </div>
  )
}

export default RoleStepArcanistChoosePathWizard