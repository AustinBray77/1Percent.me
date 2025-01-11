type Group = {
    name: string;
    description: string;
    creator_id: string;
    members: string[];
    image: string;
    location: string;
};

function createGroupFromObj(jsonObj: any): Group {
    return {
        name: jsonObj["name"],
        description: jsonObj["description"],
        creator_id: jsonObj["creator_id"],
        members: [jsonObj["creator_id"]],
        image: jsonObj["image"],
        location: jsonObj["location"],
    };
}

export { createGroupFromObj };
export type { Group };
