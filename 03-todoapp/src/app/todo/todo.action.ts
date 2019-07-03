import { Action } from '@ngrx/store'
export const AGREGAR_TODO = "[TODO] AGREGAR TODO";

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor( public texto: string) {}
}


export type Acciones = AgregarTodoAction;