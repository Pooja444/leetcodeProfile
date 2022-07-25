export interface TagDetail {
    tagName: string
    tagSlug: string
    problemsSolved: number
}

export interface TagProblemCount {
    advanced: TagDetail[]
    intermediate: TagDetail[]
    fundamental: TagDetail[]
}

export interface TagProblemCounts {
    tagProblemCounts: TagProblemCount
}

export interface SkillsMatchedUser {
    matchedUser: TagProblemCounts
}