import React, { useMemo, useState } from 'react'
import { ArcanistPath, ArcanistPathName, Translator } from 't20-sheet-builder'
import RoleStepArcanistChoosePathMage from './RoleStepArcanistChoosePathMage'
import RoleStepArcanistChoosePathWizard from './RoleStepArcanistChoosePathWizard'

type Props = {
  setPath(path: ArcanistPath): void
}

const pathComponents: Record<ArcanistPathName, React.FC<Props>> = {
  mage: RoleStepArcanistChoosePathMage,
  sorcerer: RoleStepArcanistChoosePathMage,
  wizard: RoleStepArcanistChoosePathWizard
}

const RoleStepArcanistChoosePath: React.FC<Props> = ({ setPath }) => {
  const [selectedPath, setSelectedPath] = useState(ArcanistPathName.wizard);
  const PathComponent = useMemo(() => {
    return pathComponents[selectedPath]
  }, [selectedPath])

  return (
    <div className='mb-2'>
      <div className='mb-1 flex justify-center items-center'>
        <h3 className='mr-1'>Caminho do Arcanista</h3>
        <select className='p-1' name="arcanist-path" id="arcanist-path"
          value={selectedPath} onChange={(e) => setSelectedPath(e.target.value as ArcanistPathName)}
        >
          {Object.values(ArcanistPathName).map(pathName => (
            <option key={pathName} value={pathName}>{Translator.getTranslation(pathName)}</option>
          ))}
        </select>
      </div>
      <PathComponent setPath={setPath} />
    </div>
  )
}

export default RoleStepArcanistChoosePath