import { Dispatch, SetStateAction, useState } from "react"

type MakeSetProjectionDecorator<Projection, ProjectionDecorator> = (setProjection: Dispatch<SetStateAction<Projection>>) => ProjectionDecorator

export const useProjection = <Projection, ProjectionDecorator>(
    initialValue: Projection, makeProjectionDecorator: MakeSetProjectionDecorator<Projection, ProjectionDecorator>
  ) => {
  const [projection, setProjection] = useState(initialValue);
  
  return makeProjectionDecorator(setProjection);
}