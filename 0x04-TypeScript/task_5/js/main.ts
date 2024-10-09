export type MajorCreditBrand = number & { __brand: 'MajorCredits' };
export type MinorCreditBrand = number & { __brand: 'MinorCredits' };

export interface MajorCredits {
    credits: MajorCreditBrand;
}

export interface MinorCredits {
    credits: MinorCreditBrand;
}

export function sumMajorCredits(subject1: MajorCreditBrand, subject2: MajorCreditBrand): MajorCreditBrand {
    return subject1 + subject2 as MajorCreditBrand;
}

export function sumMinorCredits(subject1: MinorCreditBrand, subject2: MinorCreditBrand): MinorCreditBrand {
    return subject1 + subject2 as MinorCreditBrand;
}
