type User = {
    email: string;
    name: string;
    id: string;
};

function generateId(): string {
    return "user_id_" + Math.random().toString().slice(2);
}

function createUserFromObj(jsonObj: any): User {
    return {
        email: jsonObj["email"],
        name: jsonObj["name"],
        id: generateId(),
    };
}

export { createUserFromObj };
export type { User };
