import { Action } from '@ngrx/store';

export enum CandidateActionTypes {
    CREATE_CANDIDATE = '[CANDIDATE] Create Candidate',
    FETCH_CANDIDATE = '[CANDIDATE] Fetch Candidate',
    SET_CANDIDATE = '[CANDIDATE] Set Candidate',
    FETCH_CANDIDATES = '[CANDIDATES] Fetch Candidates',
    SET_CANDIDATES = '[CANDIDATES] Set Candidates'
};

export class CreateCandidateAction implements Action {
    readonly type = CandidateActionTypes.CREATE_CANDIDATE;
    constructor(public name: string, public email: string, public phoneNumber: number, public aspiratedJob: string, public attractionChannel: string) { }
}

export class FetchCandidateAction implements Action {
    readonly type = CandidateActionTypes.FETCH_CANDIDATE;
    constructor() { }
};

export class SetCandidateAction implements Action {
    readonly type = CandidateActionTypes.SET_CANDIDATE;
    constructor() { }
};

export type CandidateActions = CreateCandidateAction | FetchCandidateAction | SetCandidateAction;