import { immerable } from "immer";
import SheetBuilder from "t20-sheet-builder";

export class ImmerableSheetBuilder extends SheetBuilder {
  [immerable] = true
}