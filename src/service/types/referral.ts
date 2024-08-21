export interface VisualizeReferral {
    nextClaim: string;
    inviteLink: string;
    user_id: string;
    code: string;
    claimedTON: string;
    unclaimedTON: string;
    pendingTON: string;
    lastReconciliation: string;
    depth: number;
    type: string;
    user: User;
    referrer: Referral;
    referees: Referral[];
}

export interface User {
    createdAt: string;
    updatedAt: string;
    chatId: string;
    username: string;
    firstName: string;
    lastName?: string;
    accruedFee: string;
    claims: Claim[];
}

export interface Claim {
    createdAt: string;
    updatedAt: string;
    id: number;
    amount: string;
    txHash: string;
}

export interface Referral {
    user_id: string;
    code: string;
    claimedTON: string;
    unclaimedTON: string;
    pendingTON: string;
    lastReconciliation: string;
    type: string;
    user: User;
    depth: number;
    userId?: string;
    totalFee?: string;
    volume?: string;
    volume24h?: string;
}
