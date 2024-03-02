import { PatchObject } from './PatchObject';

export type OptionalMultilingualProperties = {
  localizations?: Map<string, PatchObject>;
};

export type MultilingualProperties = OptionalMultilingualProperties;
