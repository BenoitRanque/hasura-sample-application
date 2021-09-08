<template>
  <table class="spreadsheet" @focusin="onTableFocusIn" @focusout="onTableFocusOut">
    <colgroup>
      <col width="50" />
      <col width="50" v-for="(column, colIndex) in columns" :key="`colgroup_col_${colIndex}`" />
    </colgroup>
    <thead>
      <tr>
        <th @mousedown.left.prevent="onMousedownTopLeftCorner()"></th>
        <th
          v-for="(column, colIndex) in columns"
          :key="`column_${colIndex}_header`"
          class="column-header"
          :class="getColumnHeaderClasses(colIndex)"
          @mousedown.exact.left.prevent="onMousedownColumnHeader(colIndex)"
          @mousedown.shift.left.prevent="
          onMousedownColumnHeader(colIndex, { shift: true })
          "
          @mouseenter="onMouseenterColumnHeader(colIndex)"
        >
          <slot name="column-header" :column="column" :colIndex="colIndex">{{ column.label }}</slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in rows"
        :key="`row_${rowIndex}`"
        :class="getRowHeaderClasses(rowIndex)"
      >
        <td
          class="row-header"
          @mousedown.exact.left.prevent="onMousedownRowHeader(rowIndex)"
          @mousedown.shift.left.prevent="
          onMousedownRowHeader(rowIndex, { shift: true })
          "
          @mouseenter="onMouseenterRowHeader(rowIndex)"
        >
          <slot name="row-header" :row="row" :rowIndex="rowIndex">{{ rowIndex + 1 }}</slot>
        </td>
        <td
          tabindex="0"
          v-for="(column, colIndex) in columns"
          :key="`row_${rowIndex}_col_${colIndex}`"
          :ref="(el) => setCellElementRef(el, { colIndex, rowIndex })"
          @focusin="onCellFocusIn({ colIndex, rowIndex })"
          @focusout="onCellFocusOut({ colIndex, rowIndex })"
          @mousedown.exact.left.prevent="
          onMousedownCell({ colIndex, rowIndex })
          "
          @mousedown.shift.left.prevent="
          onMousedownCell({ colIndex, rowIndex }, { shift: true })
          "
          @mousedown.right.prevent
          @mouseenter="onMouseenterCell({ colIndex, rowIndex })"
          @keydown.up="onKeydownArrowKey"
          @keydown.down="onKeydownArrowKey"
          @keydown.left="onKeydownArrowKey"
          @keydown.right="onKeydownArrowKey"
          @keydown.enter="onKeydownEnter"
          @keydown.delete="onKeydownDelete"
          :class="getCellClasses({ colIndex, rowIndex })"
        >
          <input type="text" v-model="row[column.name]" />
          <q-menu touch-position context-menu no-focus>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Open...</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Preferences</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list>
                    <q-item v-for="n in 3" :key="n" dense clickable>
                      <q-item-section>Submenu Label</q-item-section>
                      <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list>
                          <q-item v-for="n in 3" :key="n" dense clickable>
                            <q-item-section>3rd level Label</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Quit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {
  ref,
  toRefs,
  computed,
  onUnmounted,
  WritableComputedRef,
} from 'vue';

interface Position {
  colIndex: number;
  rowIndex: number;
}

type Row = Record<string, unknown>
interface Column {
  label: string,
  name: string
}

const props = defineProps<{
  columns: Column[],
  rows: Row[]
}>()

const { columns, rows } = toRefs(props)

const lastColIndex = computed<number>(
  () => columns.value.length - 1
);
const lastRowIndex = computed<number>(
  () => rows.value.length - 1
);

const cellElementRefs = ref<Record<string, HTMLTableDataCellElement>>(
  {}
);
function setCellElementRef(
  el: unknown,
  { colIndex, rowIndex }: Position
): void {
  if (el) {
    // todo: unsure if these references will be removed when a row/column is removed. make sure to check and add logic if necesary
    cellElementRefs.value[`row_${rowIndex}_col_${colIndex}`] = el as HTMLTableDataCellElement;
  }
}
function isValidPosition(position: Position): boolean {
  if (position.colIndex < 0) return false;
  if (position.colIndex > lastColIndex.value) return false;

  if (position.rowIndex < 0) return false;
  if (position.rowIndex > lastRowIndex.value) return false;
  return true;
}
// table focus
// we only _display_ the selection when this ref is true.
// we cache the selection, even when table focus is lost
// when focus returns to the table, if it returns to the same position, we want to maintain the previous selection
// this is because things like modals will cause loss of focus, but return it to the original element after they close.
const tableHasFocus = ref<boolean>(false);


// the focusout event fires when focus swiches from an element in the table to another
// we cannot check immediately if the focused element is within the table.
// instead, we schedule a function to check if focus was regained, and if not, display the lack of focus.
let tableShouldLoseFocus = false
function onTableFocusIn() {
  tableHasFocus.value = true
  tableShouldLoseFocus = false
}
function onTableFocusOut() {
  tableShouldLoseFocus = true
  setTimeout(() => {
    if (tableShouldLoseFocus) {
      tableHasFocus.value = false
    }
  }, 0)
}

const cursorState = ref<Position | null>(null);
const shadowCursorState = ref<Position | null>(null);

function onCellFocusIn(position: Position) {
  // only update if the new position is not the same as the old position
  if (!cursorState.value || cursorState.value.colIndex !== position.colIndex || cursorState.value.rowIndex !== position.rowIndex) {
    cursorState.value = position
    if (shadowCursor.value) {
      // reset shadow cursor if cursor position changed
      shadowCursor.value = null
    }
  }
}
function onCellFocusOut(position: Position) {
  // do nothing for now?
}

const cursor = computed<Position | null>({
  get: () => tableHasFocus.value ? cursorState.value : null,
  set: (value: Position | null) => {
    if (!value) {
      cursorState.value = null;
    } else {
      if (!isValidPosition(value)) return;
      const cellElementRef =
        cellElementRefs.value[`row_${value.rowIndex}_col_${value.colIndex}`];

      if (cellElementRef) {
        cellElementRef.focus();
      }
    }
  },
})

const shadowCursor = computed<Position | null>({
  get: () => tableHasFocus.value ? shadowCursorState.value : null,
  set: (value: Position | null) => {
    if (value && !isValidPosition(value)) return;
    if (value && value.colIndex === cursor.value?.colIndex && value.rowIndex === cursor.value?.rowIndex) {
      shadowCursorState.value = null;
    } else {
      shadowCursorState.value = value;
    }
  },
});


let currentlySelectingCells = false;
let currentlySelectingRows = false;
let currentlySelectingColumns = false;

function onMousedownCell(
  position: Position,
  { shift = false }: { shift: boolean } = {
    shift: false,
  }
) {
  currentlySelectingCells = true;
  if (shift && cursor.value) {
    shadowCursor.value = position;
  } else {
    cursor.value = position;
  }
}
function onMousedownColumnHeader(
  colIndex: number,
  { shift = false }: { shift: boolean } = {
    shift: false,
  }
) {
  currentlySelectingColumns = true;
  if (!shift || !cursor.value) {
    cursor.value = { colIndex, rowIndex: 0 };
  }
  shadowCursor.value = { colIndex, rowIndex: lastRowIndex.value };
}
function onMousedownRowHeader(
  rowIndex: number,
  { shift = false }: { shift: boolean } = {
    shift: false,
  }
) {
  currentlySelectingRows = true;
  if (!shift || !cursor.value) {
    cursor.value = { colIndex: 0, rowIndex };
  }
  shadowCursor.value = { colIndex: lastColIndex.value, rowIndex };
}
function onMousedownTopLeftCorner() {
  cursor.value = { colIndex: 0, rowIndex: 0 };
  shadowCursor.value = {
    colIndex: lastColIndex.value,
    rowIndex: lastRowIndex.value,
  };
}

function onMouseenterCell(position: Position) {
  if (currentlySelectingCells) {
    shadowCursor.value = position;
  }
  if (currentlySelectingColumns) {
    shadowCursor.value = {
      colIndex: position.colIndex,
      rowIndex: lastRowIndex.value,
    };
  }
  if (currentlySelectingRows) {
    shadowCursor.value = {
      colIndex: lastColIndex.value,
      rowIndex: position.rowIndex,
    };
  }
}
function onMouseenterColumnHeader(colIndex: number) {
  if (currentlySelectingColumns) {
    shadowCursor.value = { colIndex, rowIndex: lastRowIndex.value };
  }
}
function onMouseenterRowHeader(rowIndex: number) {
  if (currentlySelectingRows) {
    shadowCursor.value = { colIndex: lastColIndex.value, rowIndex };
  }
}

function onMouseup() {
  currentlySelectingCells = false;
  currentlySelectingRows = false;
  currentlySelectingColumns = false;
}

window.addEventListener('mouseup', onMouseup);

onUnmounted(() => {
  window.removeEventListener('mouseup', onMouseup);
});


function onKeydownArrowKey(e: KeyboardEvent) {
  const arrowKeys = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
  ]

  if (!cursor.value || !arrowKeys.includes(e.key)) {
    return
  }
  e.preventDefault()

  const targetCursor = e.shiftKey ? shadowCursor : cursor;

  const referenceCursor = targetCursor.value
    ? (targetCursor as WritableComputedRef<Position>)
    : (cursor as WritableComputedRef<Position>);

  switch (e.key) {
    case 'ArrowUp':
      targetCursor.value = {
        colIndex: referenceCursor.value.colIndex,
        rowIndex: e.ctrlKey ? 0 : referenceCursor.value.rowIndex - 1,
      }
      break;
    case 'ArrowDown':
      targetCursor.value = {
        colIndex: referenceCursor.value.colIndex,
        rowIndex: e.ctrlKey ? lastRowIndex.value : referenceCursor.value.rowIndex + 1,
      }
      break;
    case 'ArrowLeft':
      targetCursor.value = {
        colIndex: e.ctrlKey ? 0 : referenceCursor.value.colIndex - 1,
        rowIndex: referenceCursor.value.rowIndex,
      }
      break;
    case 'ArrowRight':
      console.log('updating cursor position', targetCursor.value, referenceCursor.value)
      targetCursor.value = {
        colIndex: e.ctrlKey ? lastColIndex.value : referenceCursor.value.colIndex + 1,
        rowIndex: referenceCursor.value.rowIndex,
      }
      break;
    default:
      throw new Error(`Unknown arrow key: '${e.key}', expected one of ${arrowKeys.join(', ')}.`)
  }
}

function onKeydownEnter(e: KeyboardEvent) {
  if (cursor.value) {
    if (e.shiftKey) {
      if (cursor.value.rowIndex > 0) {
        cursor.value = {
          rowIndex: cursor.value.rowIndex - 1,
          colIndex: cursor.value.colIndex,
        };
      }
    } else {
      if (cursor.value.rowIndex < lastRowIndex.value) {
        cursor.value = {
          rowIndex: cursor.value.rowIndex + 1,
          colIndex: cursor.value.colIndex,
        };
      }
    }
  }
}
function onKeydownDelete() {
  // todo: delete values for whole selection
}
const selection = computed<{
  fromRowIndex: number;
  toRowIndex: number;
  fromColIndex: number;
  toColIndex: number;
} | null>(() => {
  if (!cursor.value) return null;

  if (!shadowCursor.value) {
    return {
      fromRowIndex: cursor.value.rowIndex,
      toRowIndex: cursor.value.rowIndex,
      fromColIndex: cursor.value.colIndex,
      toColIndex: cursor.value.colIndex,
    };
  }

  return {
    fromRowIndex:
      cursor.value.rowIndex < shadowCursor.value.rowIndex
        ? cursor.value.rowIndex
        : shadowCursor.value.rowIndex,
    toRowIndex:
      cursor.value.rowIndex > shadowCursor.value.rowIndex
        ? cursor.value.rowIndex
        : shadowCursor.value.rowIndex,
    fromColIndex:
      cursor.value.colIndex < shadowCursor.value.colIndex
        ? cursor.value.colIndex
        : shadowCursor.value.colIndex,
    toColIndex:
      cursor.value.colIndex > shadowCursor.value.colIndex
        ? cursor.value.colIndex
        : shadowCursor.value.colIndex,
  };
});
function isCellCursor(position: Position): boolean {
  return (
    !!cursor.value &&
    cursor.value.colIndex === position.colIndex &&
    cursor.value.rowIndex === position.rowIndex
  );
}
function isCellSelected({ colIndex, rowIndex }: Position): boolean {
  if (!selection.value) {
    return false;
  } else {
    return (
      colIndex >= selection.value.fromColIndex &&
      colIndex <= selection.value.toColIndex &&
      rowIndex >= selection.value.fromRowIndex &&
      rowIndex <= selection.value.toRowIndex
    );
  }
}
function isRowSelected(rowIndex: number): boolean {
  if (!selection.value) {
    return false;
  } else {
    return (
      rowIndex >= selection.value.fromRowIndex &&
      rowIndex <= selection.value.toRowIndex
    );
  }
}
function isColumnSelected(colIndex: number): boolean {
  if (!selection.value) {
    return false;
  } else {
    return (
      colIndex >= selection.value.fromColIndex &&
      colIndex <= selection.value.toColIndex
    );
  }
}
function getCellClasses(position: Position): Record<string, boolean> {
  return {
    cursor: isCellCursor(position),
    selected: isCellSelected(position),
    top:
      !!selection.value && selection.value.fromRowIndex === position.rowIndex,
    bottom:
      !!selection.value && selection.value.toRowIndex === position.rowIndex,
    left:
      !!selection.value && selection.value.fromColIndex === position.colIndex,
    right:
      !!selection.value && selection.value.toColIndex === position.colIndex,
  };
}
function getColumnHeaderClasses(colIndex: number): Record<string, boolean> {
  return {
    selected: isColumnSelected(colIndex),
  };
}
function getRowHeaderClasses(rowIndex: number): Record<string, boolean> {
  return {
    selected: isRowSelected(rowIndex),
  };
}

</script>

<style scoped>
.spreadsheet {
  user-select: none;
  box-sizing: border-box;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
}
.spreadsheet td,
.spreadsheet th {
  padding: 4px 8px;
  height: 28px;
}
.spreadsheet th,
.spreadsheet td:first-child {
  white-space: nowrap;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #f3f3f3;
  cursor: pointer;
  font-weight: bold;
}
.spreadsheet td:not(:first-child) {
  border: 1px solid rgba(0, 0, 0, 0.12);
  white-space: nowrap;
  line-height: 1em;
}
.spreadsheet td:first-child {
  text-align: right;
}
.spreadsheet th.selected,
.spreadsheet tr.selected td:first-child {
  background-color: #dcdcdc;
}
.spreadsheet td.selected:not(.cursor) {
  background-color: #dddddd;
}
.spreadsheet tr td.cursor {
  outline: none;
}
.spreadsheet tr td:focus {
  background-color: red;
}
.spreadsheet tr td.selected.top {
  border-top-color: black;
  border-top-width: 2px;
}
.spreadsheet tr td.selected.left {
  border-left-color: black;
  border-left-width: 2px;
}
.spreadsheet tr td.selected.right {
  border-right-color: black;
  border-right-width: 2px;
}
.spreadsheet tr td.selected.bottom {
  border-bottom-color: black;
  border-bottom-width: 2px;
}
</style>
