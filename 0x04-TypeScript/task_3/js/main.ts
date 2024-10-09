/// <reference path="./crud.d.ts">
import {RowId, RowElement} from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID:RowId = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(125);
