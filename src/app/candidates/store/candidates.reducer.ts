import { CandidateActionTypes, CandidateActions } from './candidate.actions';
import { Candidate } from '../models/candidate.model';

const initialState: Candidate = {
    name: null,
    email: null,
    phoneNumber: null,
    aspiratedJob: null,
    attractionChannel: null
};

export function candidatesReducer(state = initialState, action: CandidateActions): Candidate {
    switch (action.type) {
        case CandidateActionTypes.CREATE_CANDIDATE:
            const candidate = new Candidate(action.name, action.email, action.phoneNumber, action.aspiratedJob, action.attractionChannel);
            return candidate;
        case CandidateActionTypes.FETCH_CANDIDATE:
            return null;
        case CandidateActionTypes.SET_CANDIDATE:
        default:
            return state;
    }
}