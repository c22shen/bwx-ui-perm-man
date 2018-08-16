export interface Group {
    active: boolean;
    createdTimestamp?: string;
    createdBy?: string;
    entityState: string;
    groupId: string;
    externalGroupId?: string;
    derivedGroup: boolean;
    groupName: string;
    regionCode?: any;
    orgCode?: string;
    activeUsers: any[];
}

// Created using http://www.jsontots.com/