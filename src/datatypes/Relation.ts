export type CanonicalType = 'first' | 'next' | 'child' | 'parent';

export type BackendSoulsType =
  | 'backendsouls.dev:origin'
  | 'backendsouls.dev:clone';
export type RelationType = CanonicalType & BackendSoulsType;

export type Relation = {
  '@type': 'Relation';
  relation: Map<RelationType, boolean>;
};
