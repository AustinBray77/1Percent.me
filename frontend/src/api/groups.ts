import axios, { AxiosResponse } from "axios";
import { Group } from "../types/group";

function getAllGroups(): Promise<Group[]> {
    return axios
        .post("http://localhost:3000/api/group/all", JSON.stringify({}), {
            headers: { "Content-Type": "application/json" },
        })
        .then((res: AxiosResponse<any, any>) => {
            return res.data["groups"] as Group[];
        })
        .catch((err) => {
            console.error(err);
            return [] as Group[];
        });
}

function getGroupsByFilters(filters: any): Promise<Group[]> {
    return axios
        .post(
            "http://localhost:3000/api/group/all",
            JSON.stringify({ filters: filters }),
            {
                headers: { "Content-Type": "application/json" },
            }
        )
        .then((res: AxiosResponse<any, any>) => {
            return res.data["groups"] as Group[];
        })
        .catch((err) => {
            console.error(err);
            return [] as Group[];
        });
}

function getGroupsFromUser(user_id: string): Promise<Group[]> {
    return axios
        .post(
            "http://localhost:3000/api/group/from-user",
            JSON.stringify({ user_id: user_id }),
            {
                headers: { "Cntent-Type": "application/json" },
            }
        )
        .then((res: AxiosResponse<any, any>) => {
            return res.data["groups"] as Group[];
        })
        .catch((err) => {
            console.error(err);
            return [] as Group[];
        });
}

function addUserToGroup(user_id: string, group_name: string): Promise<boolean> {
    return axios
        .post(
            "http://localhost:3000/api/groups/add-user",
            JSON.stringify({ user_id: user_id, group_name: group_name }),
            { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
            return true;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
}

export { getAllGroups, getGroupsByFilters, getGroupsFromUser, addUserToGroup };
