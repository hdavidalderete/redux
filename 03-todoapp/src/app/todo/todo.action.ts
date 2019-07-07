import { Action } from '@ngrx/store'
export const AGREGAR_TODO = "[TODO] AGREGAR TODO";
export const CAMBIAR_ESTADO = "[TODO] CAMBIAR ESTADO";
export const CAMBIAR_ALL_ESTADO = "[TODO] CAMBIAR ALL ESTADO";
export const EDITAR_TODO = "[TODO] EDITAR TODO";
export const ELIMINAR_TODO = "[TODO] ELIMINAR TODO";
export const ELIMINAR_TODOS_COMPLETADOS = "[TODO] ELIMINAR TODOS ELIMINADOS"

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }

}
export class CambiarEstadoAction implements Action {
    readonly type = CAMBIAR_ESTADO;
    constructor(public id: number) { }
}

export class CambiarAllEstadoAction implements Action {
    readonly type = CAMBIAR_ALL_ESTADO;
    constructor(public completado: boolean) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) { }
}

export class EliminarTodoAction implements Action {
    readonly type = ELIMINAR_TODO;
    constructor(public id: number) { }
}

export class EliminarTodosCompletadosAction implements Action {
    readonly type = ELIMINAR_TODOS_COMPLETADOS;
    constructor() {}
}



export type Acciones = AgregarTodoAction | CambiarEstadoAction
    | EditarTodoAction | EliminarTodoAction | CambiarAllEstadoAction | EliminarTodosCompletadosAction;