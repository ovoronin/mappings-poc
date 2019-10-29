/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface DataNode {
  name: string;
  selected?: boolean;
  children?: DataNode[];
}

/** Flat node with expandable and level information */
export interface DataFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  dataNode: DataNode;
}

export interface Mapping {
  source: DataNode;
  target: DataNode;
}
