import { PatchObject } from './PatchObject';

export type MultilingualProperties = {
  localizations?: Map<string, PatchObject>; // key is a language tag, RFC-5646
};
