type Filters = {
    apply: boolean;
    location: string;
};

const NoFilter = {
    apply: false,
    distance: -1,
    location: "none",
};

function createFiltersFromObj(jsonObj: any): Filters {
    if (jsonObj == undefined) {
        return NoFilter;
    }

    return {
        apply: true,
        location: jsonObj["location"],
    };
}

export { createFiltersFromObj };
export type { Filters };
