import { atomWithReset } from "jotai/utils";
import { InstructionType } from "../types/Instraction";

export const instructionAtom = atomWithReset<InstructionType>("create");