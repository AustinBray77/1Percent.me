import axios from "axios";
import { Group } from "../types/group";

function getAllGroups(): Promise<Group> {
    return axios.post("/api/groups/all", JSON.stringify({}), {
        headers: { "Content-Type": "application/json" },
    });
}

function getGroupsByFilters(filters: any): Promise<Group> {
    return axios.post("/api/groups/all", JSON.stringify({ filters: filters }), {
        headers: { "Content-Type": "application/json" },
    });
}

function getGroupsFromUser(user_id: string): Promise<Group> {
    return axios.post(
        "/api/groups/from-user",
        JSON.stringify({ user_id: user_id }),
        {
            headers: { "Cntent-Type": "application/json" },
        }
    );
}

export { getAllGroups, getGroupsByFilters, getGroupsFromUser };
