type Streak = {
    userid: string;
    fitness_streak: number;
    reading_streak: number;
    coding_streak: number;
    meditation_streak: number;
    nature_streak: number;
    graditude_streak: number;
};

function createBlankStreak(user_id: string) {
    return {
        userid: user_id,
        fitness_streak: 0,
        reading_streak: 0,
        coding_streak: 0,
        meditation_streak: 0,
        nature_streak: 0,
        graditude_streak: 0,
    };
}

export { createBlankStreak };
export type { Streak };
