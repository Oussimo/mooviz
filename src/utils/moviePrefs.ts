import { TMoviePreferences  } from "../types/types";


export const moviePreferences: TMoviePreferences = [
	{
		label: "genre",
		list: [
			"",
			"Action",
			"Comedy",
			"Drama",
			"Horror",
			"Romance",
			"Thriller",
			"Fantasy",
			"Sci-Fi",
			"Documentary",
			"Animated",
			"Musical",
			"Crime",
			"Historical",
		],
	},
	{
		label: "category",
		list: [
			"",
			"Blockbuster",
			"Indie",
			"Documentary",
			"Animated",
			"Franchise",
			"Standalone",
			"Based on True Events",
		],
	},
	{
		label: "theme",
		list: [
			"",
			"Adventure",
			"Mystery",
			"Fantasy",
			"Sci-Fi",
			"Crime",
			"Survival",
			"Coming of Age",
			"War",
			"Politics",
			"Social Issues",
			"Technology",
			"Environment",
			"Superheroes",
			"Love Story",
		],
	},
	{
		label: "audience",
		list: [
			"",
			"Family",
			"Kids",
			"Teens",
			"Adults",
			"Seniors",
			"General Audience",
			"Mature Audience",
		],
	},
	{
		label: "mood",
		list: [
			"",
			"Exciting",
			"Feel-Good",
			"Suspenseful",
			"Heartwarming",
			"Dark",
			"Inspiring",
			"Uplifting",
			"Nostalgic",
			"Humorous",
			"Thought-Provoking",
			"Romantic",
			"Gritty",
			"Melancholic",
		],
	},
	{
		label: "year",
		list: [
			"",
			"1960-1969",
			"1970-1979",
			"1980-1989",
			"1990-1999",
			"2000-2009",
			"2010-2019",
			"2020-2029",
		],
	},
	{
		label: "duration",
		list: ["", "< 90 min", "90-120 min", "120-150 min", "> 150 min"],
	},
];
