import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set Filter'
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filtro: filtrosValidos) {
    }
}

export type acciones = SetFiltroAction;