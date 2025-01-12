type Filters = {
    apply: boolean;
    filters: {
        location: string;
    };
};

const NoFilter = {
    apply: false,
    filters: {
        location: "none",
    },
};

function createFiltersFromObj(jsonObj: any): Filters {
    if (jsonObj == undefined) {
        return NoFilter;
    }

    return {
        apply: true,
        filters: {
            location: jsonObj["location"],
        },
    };
}

export { createFiltersFromObj };
export type { Filters };
