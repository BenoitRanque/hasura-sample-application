export interface Position {
  colIndex: number;
  rowIndex: number;
}

export interface Selection {
  fromRowIndex: number;
  toRowIndex: number;
  fromColIndex: number;
  toColIndex: number;
}

export type RowData = Record<string, unknown>;

export interface Row {
  readonly: boolean;
  data: RowData;
}

export interface Column {
  label: string;
  key: string;
  type: 'string' | 'integer' | 'select';
  readonly: boolean;
  value: string;
}
